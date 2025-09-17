import Skeleton from '@/shared/components/ui/Skeleton';

export default function LoggedUserSkeleton() {
  return (
    <div className="flex items-center gap-x-4 px-6 py-3">
      <Skeleton width={32} height={32} className="rounded-full" />
      <Skeleton width={80} height={16} className="rounded" />
    </div>
  );
}
