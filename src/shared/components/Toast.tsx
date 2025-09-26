import { Toast, Toaster, createToaster } from '@ark-ui/react/toast';
import {
  CircleAlertIcon,
  TriangleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  X,
} from 'lucide-react';

/**
 * Tailwind CSS class definitions for each notification type.
 */
export const toastStyles = {
  // ADDED EXPORT
  success: {
    // Background/Border/Shadow - Green for success
    root: 'bg-green-50 border border-green-200 shadow-lg',
    // Icon color - Darker green
    icon: 'text-green-500',
    // Title/description text color - Dark text
    text: 'text-green-900',
    // Close button color
    close: 'text-green-800/70 hover:text-green-900',
  },
  error: {
    // Background/Border/Shadow - Red for error
    root: 'bg-red-50 border border-red-200 shadow-lg',
    // Icon color - Red
    icon: 'text-red-500',
    // Title/description text color
    text: 'text-red-900',
    // Close button color
    close: 'text-red-800/70 hover:text-red-900',
  },
  warning: {
    // Background/Border/Shadow - Amber/Orange for warning
    root: 'bg-amber-50 border border-amber-200 shadow-lg',
    // Icon color - Amber
    icon: 'text-amber-500',
    // Title/description text color
    text: 'text-amber-900',
    // Close button color
    close: 'text-amber-800/70 hover:text-amber-900',
  },
  info: {
    // Background/Border/Shadow - Blue for info
    root: 'bg-blue-50 border border-blue-200 shadow-lg',
    // Icon color - Blue
    icon: 'text-blue-500',
    // Title/description text color
    text: 'text-blue-900',
    // Close button color
    close: 'text-blue-800/70 hover:text-blue-900',
  },
};

const toaster = createToaster({
  overlap: true,
  placement: 'bottom-end',
  gap: 16,
});

export const iconMap = {
  success: CircleCheckIcon,
  error: CircleAlertIcon,
  warning: TriangleAlertIcon,
  info: InfoIcon,
};

export const Types = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            toaster.success({
              title: 'Success!',
              description: 'Your changes have been saved.',
            })
          }
          className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
        >
          Success
        </button>
        <button
          type="button"
          onClick={() =>
            toaster.error({
              title: 'Error occurred',
              description: 'Something went wrong. Please try again.',
            })
          }
          className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Error
        </button>
        <button
          type="button"
          onClick={() =>
            toaster.warning({
              title: 'Warning',
              description: 'This action cannot be undone.',
            })
          }
          className="rounded-md bg-amber-500 px-4 py-2 text-white transition hover:bg-amber-600"
        >
          Warning
        </button>
        <button
          type="button"
          onClick={() =>
            toaster.info({
              title: 'New update available',
              description: 'Version 2.1.0 is now available for download.',
            })
          }
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Info
        </button>
      </div>

      <Toaster toaster={toaster}>
        {(toast) => {
          const type = (toast.type as keyof typeof toastStyles) || 'info';
          const styles = toastStyles[type] || toastStyles.info;
          const ToastIcon = iconMap[type as keyof typeof iconMap] || InfoIcon;

          return (
            <Toast.Root
              key={toast.id}
              id={toast.id}
              className={`w-auto max-w-md rounded-xl p-4 transition-transform duration-300 ${styles.root}`}
            >
              <div className="flex items-start gap-3">
                {ToastIcon && (
                  <ToastIcon className={`h-5 w-5 shrink-0 ${styles.icon}`} />
                )}
                <div className={`min-w-0 flex-1 ${styles.text}`}>
                  <Toast.Title className="text-base font-semibold">
                    {toast.title}
                  </Toast.Title>
                  <Toast.Description className="mt-1 text-sm break-words opacity-90">
                    {toast.description}
                  </Toast.Description>
                </div>
                <Toast.CloseTrigger
                  className={`ml-auto shrink-0 ${styles.close}`}
                >
                  <X className="h-5 w-5" />
                </Toast.CloseTrigger>
              </div>
            </Toast.Root>
          );
        }}
      </Toaster>
    </div>
  );
};

export { toaster };
