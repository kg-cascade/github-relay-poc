import React from 'react';

type ImageProps = {
  icon: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
};

export const Image = ({
  icon,
  width,
  height,
  className,
  style,
  alt = '',
}: ImageProps) => {
  return (
    <img
      src={icon}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      aria-hidden={!alt}
    />
  );
};
