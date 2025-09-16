import React from 'react';

type ImageProps = {
  svg: string; // ścieżka do pliku, np. import z Vite
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
};

export const Image = ({
  svg,
  width,
  height,
  className,
  style,
  alt = '',
}: ImageProps) => {
  return (
    <img
      src={svg}
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
