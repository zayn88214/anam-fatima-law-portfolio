import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-emerald text-[#06131f] shadow-[0_10px_28px_-14px_rgba(76,201,187,0.8)] hover:bg-emerald-dark active:scale-[0.98]',
        gold:
          'bg-gold text-charcoal shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] hover:brightness-95 active:scale-[0.98]',
        outline:
          'border border-border bg-transparent text-foreground hover:border-emerald hover:text-emerald-dark dark:hover:text-emerald',
        ghost: 'text-foreground hover:bg-emerald-light hover:text-emerald-dark',
        link: 'text-emerald-dark underline-offset-4 hover:underline dark:text-emerald',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-7 py-3.5 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
