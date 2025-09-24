'use client';

import { Tabs } from '@ark-ui/react/tabs';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

type TabItem = {
  label: string;
  href: string;
  content?: React.ReactNode;
};

interface GenericTabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}

export const GenericTabs = ({ tabs, defaultIndex = 0 }: GenericTabsProps) => {
  const [value, setValue] = useState<string>(tabs[defaultIndex]?.href || '');

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List className="flex divide-x divide-white/10 rounded-lg bg-gray-800/50">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.href}
            value={tab.href}
            className="flex-1 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 data-[state=selected]:bg-indigo-500/20 data-[state=selected]:text-white"
          >
            {tab.href ? (
              <Link to={tab.href} className="block h-full w-full">
                {tab.label}
              </Link>
            ) : (
              tab.label
            )}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};
