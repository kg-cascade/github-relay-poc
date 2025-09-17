type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  className,
}) => (
  <div
    className={`animate-pulse rounded bg-gray-700/50 ${className ?? ''}`}
    style={{ width, height }}
    aria-hidden="true"
  />
);

export default Skeleton;
