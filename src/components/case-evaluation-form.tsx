'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { caseCategories, caseEvaluationSchema, type CaseEvaluationValues } from '@/lib/schema';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className='mt-1.5 flex items-center gap-1 text-xs text-red-400'>
      <AlertCircle className='h-3.5 w-3.5' aria-hidden='true' />
      {message}
    </p>
  );
}

export function CaseEvaluationForm() {
  const [state, setState] = useState<SubmitState>('idle');
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CaseEvaluationValues>({ resolver: zodResolver(caseEvaluationSchema) });

  const onSubmit = async (values: CaseEvaluationValues) => {
    if (values.website_hp) {
      setState('success');
      return;
    }

    setState('submitting');
    try {
      // Present a local completion state after validation. No data leaves the browser.
      await new Promise((resolve) => setTimeout(resolve, 450));
      setState('success');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div role='status' className='flex flex-col items-center gap-3 rounded-2xl border border-emerald/25 bg-emerald-light/45 p-8 text-center'>
        <span className='flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald/25 bg-background/60'>
          <CheckCircle2 className='h-7 w-7 text-emerald' aria-hidden='true' />
        </span>
        <h2 className='font-display text-xl font-semibold text-foreground'>Questionnaire complete</h2>
        <p className='max-w-md text-sm leading-6 text-muted-foreground'>
          Your entries passed the on-page checks. Nothing was sent or stored, and this does not constitute a
          case review or legal advice.
        </p>
        <Button asChild variant='outline' className='mt-2'>
          <Link href='/'>Return to homepage</Link>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className='space-y-6'>
      <div className='border-b border-border pb-5'>
        <p className='font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald'>Questionnaire</p>
        <h2 className='mt-2 font-display text-2xl font-semibold text-foreground'>Basic situation details</h2>
        <p className='mt-2 text-sm leading-6 text-muted-foreground'>
          Complete the fields below to organize the information clearly.
        </p>
      </div>

      <div className='hidden' aria-hidden='true'>
        <label htmlFor='website_hp'>Leave this field empty</label>
        <input id='website_hp' type='text' tabIndex={-1} autoComplete='off' {...register('website_hp')} />
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' autoComplete='name' aria-invalid={!!errors.name} {...register('name')} />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' autoComplete='email' aria-invalid={!!errors.email} {...register('email')} />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor='phone'>
            Phone <span className='font-normal text-muted-foreground'>(optional)</span>
          </Label>
          <Input id='phone' type='tel' autoComplete='tel' {...register('phone')} />
        </div>

        <div>
          <Label htmlFor='category'>Area of concern</Label>
          <Controller
            control={control}
            name='category'
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id='category' aria-invalid={!!errors.category}>
                  <SelectValue placeholder='Select an area' />
                </SelectTrigger>
                <SelectContent>
                  {caseCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.category?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor='description'>Briefly describe your situation</Label>
        <Textarea id='description' rows={5} aria-invalid={!!errors.description} {...register('description')} />
        <FieldError message={errors.description?.message} />
      </div>

      {state === 'error' && (
        <p role='alert' className='flex items-center gap-2 rounded-xl border border-red-400/25 bg-red-950/35 px-4 py-3 text-sm text-red-300'>
          <AlertCircle className='h-4 w-4 shrink-0' aria-hidden='true' />
          Something went wrong. Please try again shortly.
        </p>
      )}

      <Button type='submit' disabled={state === 'submitting'} className='w-full sm:w-auto'>
        {state === 'submitting' ? (
          <>
            <Loader2 className='h-4 w-4 animate-spin' aria-hidden='true' />
            Checking...
          </>
        ) : (
          'Complete questionnaire'
        )}
      </Button>
    </form>
  );
}
