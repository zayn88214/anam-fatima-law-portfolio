'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { newsletterSchema, type NewsletterValues } from '@/lib/schema';

export function NewsletterCTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-emerald-dark py-16 sm:py-20">
      <Container className="mx-auto max-w-2xl text-center">
        <span className="flex h-12 w-12 items-center justify-center mx-auto rounded-2xl bg-white/10 text-white">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
          Stay Informed on Future Availability
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          Subscribe for updates on new articles, legal guides, and when consultations become available.
        </p>

        {submitted ? (
          <p className="mt-6 flex items-center justify-center gap-2 font-display text-sm font-semibold text-white">
            <CheckCircle2 className="h-4.5 w-4.5" aria-hidden="true" />
            Thank you for subscribing.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1 text-left">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white"
                aria-invalid={!!errors.email}
                {...register('email')}
              />
              {errors.email && <p className="mt-1.5 text-xs text-gold-light">{errors.email.message}</p>}
            </div>
            <Button type="submit" variant="gold" disabled={isSubmitting}>
              Subscribe
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
