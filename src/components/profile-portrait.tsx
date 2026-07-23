import Image from 'next/image';
import { cn } from '@/lib/utils';
import { person } from '@/lib/site-config';

export function ProfilePortrait({ className, imageClassName, preload = false }: { className?: string; imageClassName?: string; preload?: boolean }) {
  return (
    <div className={cn('profile-frame relative isolate aspect-[2/3] overflow-hidden rounded-[2.25rem] bg-emerald-light', className)}>
      <div className="absolute inset-x-8 bottom-0 top-12 rounded-full bg-white/45 blur-2xl dark:bg-white/5" />
      <Image
        src={person.photo.src}
        alt={person.photo.alt}
        fill
        preload={preload}
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 340px, 460px"
        className={cn('object-cover object-center', imageClassName)}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/55 dark:ring-white/10" />
    </div>
  );
}
