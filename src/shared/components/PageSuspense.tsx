import cascadeLogo from '@/shared/assets/logos/cascade.svg';
import { Image } from './ui/Image';

export default function PageSuspense() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 animate-pulse gap-4">
      <Image svg={cascadeLogo} alt="Cascade Logo" width="100" height="100" />
      Loading ...
    </div>
  );
}
