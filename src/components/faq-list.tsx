import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import type { FAQItem } from '@/lib/faqs';

export function FAQList({ items, idPrefix = 'faq' }: { items: FAQItem[]; idPrefix?: string }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, idx) => (
        <AccordionItem key={item.question} value={`${idPrefix}-${idx}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
