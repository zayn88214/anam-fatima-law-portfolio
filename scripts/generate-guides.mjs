import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'scripts', 'guide-content');
const outputDir = path.join(root, 'public', 'guides');

const files = [
  'employment-rights-guide',
  'property-buying-checklist',
  'business-registration-guide',
  'family-law-basics',
  'workplace-harassment-guide',
  'contract-review-checklist',
  'consumer-rights-punjab',
  'cybercrime-reporting-guide',
  'tax-registration-basics',
  'succession-planning-basics',
];

function escapePdf(text) {
  return text.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function wrap(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textOp(text, x, y, size, font = 'F1', color = '0.14 0.20 0.22') {
  return `BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${escapePdf(text)}) Tj ET`;
}

function pageStream(source, pageNumber, totalPages) {
  const lines = source.split(/\r?\n/);
  const ops = [
    'q 0.094 0.192 0.224 rg 0 744 612 48 re f Q',
    'q 0.137 0.498 0.471 rg 0 738 612 6 re f Q',
    textOp('ANAM FATIMA  |  LEGAL LEARNING SERIES', 52, 762, 8, 'F2', '1 1 1'),
  ];
  let y = 706;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      y -= 8;
      continue;
    }
    if (line.startsWith('# ')) {
      for (const part of wrap(line.slice(2), 42)) {
        ops.push(textOp(part, 52, y, 23, 'F2', '0.094 0.192 0.224'));
        y -= 29;
      }
      y -= 7;
      continue;
    }
    if (line.startsWith('## ')) {
      y -= 5;
      for (const part of wrap(line.slice(3), 62)) {
        ops.push(textOp(part, 52, y, 15, 'F2', '0.086 0.369 0.357'));
        y -= 21;
      }
      y -= 2;
      continue;
    }
    const bullet = line.startsWith('- ');
    const body = bullet ? line.slice(2) : line;
    const width = bullet ? 86 : 92;
    const parts = wrap(body, width);
    parts.forEach((part, index) => {
      const prefix = bullet && index === 0 ? '-  ' : bullet ? '   ' : '';
      ops.push(textOp(prefix + part, bullet ? 62 : 52, y, 10));
      y -= 15;
    });
    y -= 2;
  }

  ops.push('q 0.87 0.89 0.88 RG 52 44 m 560 44 l S Q');
  ops.push(textOp('Educational information only - verify current law and obtain qualified advice.', 52, 27, 7.5, 'F1', '0.38 0.44 0.45'));
  ops.push(textOp(`${pageNumber} / ${totalPages}`, 530, 27, 7.5, 'F2', '0.38 0.44 0.45'));
  return ops.join('\n');
}

function makePdf(pageSources) {
  const objects = new Map();
  const pageIds = pageSources.map((_, index) => 5 + index * 2);
  objects.set(1, '<< /Type /Catalog /Pages 2 0 R >>');
  objects.set(2, `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`);
  objects.set(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  objects.set(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  pageSources.forEach((source, index) => {
    const pageId = pageIds[index];
    const contentId = pageId + 1;
    const stream = pageStream(source, index + 1, pageSources.length);
    objects.set(pageId, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`);
    objects.set(contentId, `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);
  });

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  const maxId = Math.max(...objects.keys());
  for (let id = 1; id <= maxId; id += 1) {
    offsets[id] = Buffer.byteLength(pdf);
    pdf += `${id} 0 obj\n${objects.get(id)}\nendobj\n`;
  }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${maxId + 1}\n0000000000 65535 f \n`;
  for (let id = 1; id <= maxId; id += 1) pdf += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(pdf, 'utf8');
}

fs.mkdirSync(outputDir, { recursive: true });
for (const file of files) {
  const content = fs.readFileSync(path.join(contentDir, `${file}.txt`), 'utf8');
  const pages = content.split(/\n---PAGE---\n/);
  if (pages.length !== 5) throw new Error(`${file} must contain exactly five pages`);
  fs.writeFileSync(path.join(outputDir, `${file}.pdf`), makePdf(pages));
}

console.log(`Generated ${files.length} sourced legal guides in ${outputDir}`);

