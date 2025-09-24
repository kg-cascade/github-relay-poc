import { Switch as SwitchArk } from '@ark-ui/react/switch';
import { useState } from 'react';
import { cn } from '@/shared/utils/cn';

interface SwitchProps {
  defaultState?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Switch = ({ defaultState = false, ...props }: SwitchProps) => {
  const [checked, setChecked] = useState(defaultState);

  return (
    <SwitchArk.Root
      checked={checked}
      onCheckedChange={(e) => {
        props.onClick?.();
        setChecked(e.checked);
      }}
      className={cn('flex items-center gap-2')}
    >
      <SwitchArk.Control
        className={cn(
          'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
          'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-400'
        )}
      >
        <SwitchArk.Thumb
          className={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out',
            'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
          )}
        />
      </SwitchArk.Control>
      {props.children && (
        <SwitchArk.Label className="text-sm font-medium text-gray-300 select-none">
          {props.children}
        </SwitchArk.Label>
      )}
      <SwitchArk.HiddenInput />
    </SwitchArk.Root>
  );
};
