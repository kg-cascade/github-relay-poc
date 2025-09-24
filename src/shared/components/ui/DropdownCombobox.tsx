import React from 'react';
import {
  Combobox,
  useListCollection,
  type ComboboxValueChangeDetails,
  type ComboboxInputValueChangeDetails,
} from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { Portal } from '@ark-ui/react/portal';
import clsx from 'clsx';

interface Option {
  label: string;
  value: string;
}

interface ControlledComboboxProps {
  items: Option[];
  selectedValue: string | null;
  onChange: (value: string | null) => void;
  label?: string;
  placeholder?: string;
  maxHeight?: string;
  zIndex?: number;
}

export const ControlledCombobox: React.FC<ControlledComboboxProps> = ({
  items,
  selectedValue,
  onChange,
  label = 'Wybierz',
  placeholder = '',
  maxHeight = '200px',
  zIndex = 1000,
}) => {
  const { contains } = useFilter({ sensitivity: 'base' });

  const { collection, filter } = useListCollection({
    initialItems: items,
    filter: contains,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    filter(details.inputValue);
  };

  const handleValueChange = (details: ComboboxValueChangeDetails) => {
    const first = details.value?.[0] ?? null;
    onChange(first);
  };

  return (
    <Combobox.Root
      collection={collection}
      value={selectedValue ? [selectedValue] : []}
      onValueChange={handleValueChange}
      inputValue={selectedValue ?? ''}
      onInputValueChange={handleInputChange}
    >
      <Combobox.Label className="mb-1 block text-sm font-medium text-white">
        {label}
      </Combobox.Label>

      <Combobox.Control className="relative">
        <Combobox.Input
          placeholder={placeholder}
          className="w-full rounded-md border border-zinc-600 bg-zinc-800 py-2 pr-10 pl-3 text-sm text-white placeholder-zinc-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
        <Combobox.Trigger className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
          ▼
        </Combobox.Trigger>
        <Combobox.ClearTrigger className="absolute inset-y-0 right-7 flex items-center pr-2 text-zinc-500 hover:text-white">
          ✕
        </Combobox.ClearTrigger>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content
            className={clsx(
              'z-[2000] mt-1 w-full rounded-md bg-zinc-800 shadow-lg ring-1 ring-zinc-700 focus:outline-none',
              'max-h-60 overflow-auto text-sm text-white'
            )}
            style={{
              maxHeight,
              zIndex,
            }}
          >
            {collection.items.length > 0 ? (
              collection.items.map((item) => (
                <Combobox.Item
                  key={item.value}
                  item={item}
                  className="cursor-pointer px-4 py-2 select-none hover:bg-zinc-700 aria-selected:bg-cyan-600 aria-selected:text-white"
                >
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                </Combobox.Item>
              ))
            ) : (
              <div className="px-4 py-2 text-zinc-400">Brak wyników</div>
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
