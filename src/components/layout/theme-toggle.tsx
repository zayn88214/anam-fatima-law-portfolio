'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const subscribe = () => () => {};

export function ThemeToggle({ className, showLabel = false }: { className?: string; showLabel?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = !mounted || resolvedTheme !== 'light';
  const label = isDark ? 'Use light theme' : 'Use dark theme';

  return (
    <Button
      type="button"
      variant={showLabel ? 'outline' : 'ghost'}
      size={showLabel ? 'sm' : 'icon'}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(className)}
    >
      {isDark ? <Sun className="h-4.5 w-4.5" aria-hidden="true" /> : <Moon className="h-4.5 w-4.5" aria-hidden="true" />}
      {showLabel && <span>{isDark ? 'Light' : 'Dark'}</span>}
    </Button>
  );
}
