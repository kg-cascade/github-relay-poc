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
      <ArkHoverCard.Content className="absolute z-50 bg-gray-800 text-white p-2  rounded-2xl shadow-lg">
        {content}
      </ArkHoverCard.Content>
    </ArkHoverCard.Root>
  );
};

export default HoverCard;
