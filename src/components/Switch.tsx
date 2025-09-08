import { Switch as ArkSwitch } from '@ark-ui/react/switch';
import React, { useState } from 'react';

interface SwitchProps
  extends Omit<React.ComponentProps<typeof ArkSwitch.Root>, 'label'> {
  label: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  controlled?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-4',
  md: 'w-12 h-6',
  lg: 'w-16 h-8',
};

const thumbSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-5 h-5',
  lg: 'w-7 h-7',
};

const getColorClasses = (color: string, variant: string) => {
  switch (variant) {
    case 'solid':
      return {
        track: `bg-${color} bg-opacity-30 data-[state=checked]:bg-${color}`,
        thumb: `bg-${color} data-[state=checked]:translate-x-full`,
      };
    case 'outline':
      return {
        track: `border border-${color} bg-transparent data-[state=checked]:bg-${color} data-[state=checked]:bg-opacity-30`,
        thumb: `bg-${color} data-[state=checked]:translate-x-full`,
      };
    case 'ghost':
      return {
        track: `bg-transparent data-[state=checked]:bg-${color} data-[state=checked]:bg-opacity-20`,
        thumb: `bg-${color} data-[state=checked]:translate-x-full`,
      };
    case 'link':
      return {
        track: `bg-transparent data-[state=checked]:bg-${color} data-[state=checked]:bg-opacity-20`,
        thumb: `bg-${color} data-[state=checked]:translate-x-full`,
      };
    default:
      return {
        track: `bg-${color} bg-opacity-30`,
        thumb: `bg-${color}`,
      };
  }
};

const Switch: React.FC<SwitchProps> = ({
  label,
  size = 'md',
  colorScheme = 'primary',
  variant = 'solid',
  checked: controlledChecked,
  onCheckedChange,
  controlled = false,
  ...rest
}) => {
  const [checked, setChecked] = useState(controlledChecked ?? false);
  const isControlled = controlled && controlledChecked !== undefined;

  const { track, thumb } = getColorClasses(colorScheme, variant);

  return (
    <ArkSwitch.Root
      checked={isControlled ? controlledChecked : checked}
      onCheckedChange={(details) => {
        if (!isControlled) setChecked(details.checked);
        if (onCheckedChange) onCheckedChange(details);
      }}
      className={`relative inline-flex items-center cursor-pointer select-none rounded-full ${sizeClasses[size]} ${track} transition-colors duration-200 border-transparent data-[state=checked]:border-transparent`}
      {...rest}
    >
      <ArkSwitch.Control
        className={`absolute left-0 top-0 flex items-center rounded-full transition-transform duration-200 ease-in-out border ${sizeClasses[size]} border-transparent data-[state=checked]:border-transparent`}
      >
        <ArkSwitch.Thumb
          className={`block rounded-full transform bg-white ${thumbSizeClasses[size]} transition-transform duration-200 ease-in-out ${thumb}`}
        />
      </ArkSwitch.Control>

      <span className="ml-3 select-none text-text">{label}</span>

      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
};

export default Switch;
