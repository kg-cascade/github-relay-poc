import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card';
import React from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ children, content }) => {
  return (
    <ArkHoverCard.Root openDelay={100}>
      <ArkHoverCard.Trigger asChild>{children}</ArkHoverCard.Trigger>
      <ArkHoverCard.Content className="data-[state=open]:animate-fade-in absolute z-50 rounded-2xl bg-gray-800 p-2 text-white shadow-lg data-[placement=bottom]:mt-2 data-[placement=top]:mb-2">
        {content}
      </ArkHoverCard.Content>
    </ArkHoverCard.Root>
  );
};

export default HoverCard;
