import { Dialog as DialogArk } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import { Button } from './Button';

interface ModalProps {
  open: boolean;
  children?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

export const Modal = (props: ModalProps) => {
  return (
    <DialogArk.Root
      open={props.open}
      onOpenChange={(e) => props.onOpenChange(e.open)}
    >
      <Portal>
        <DialogArk.Backdrop className="fixed inset-0 bg-black/50 w-svw z-100" />
        <DialogArk.Positioner className="fixed inset-0 z-110 flex items-center justify-center">
          <DialogArk.Content className="w-screen max-w-sm flex-auto  rounded-3xl bg-white dark:bg-gray-800 p-4 outline-1 -outline-offset-1 dark:outline-white/10 outline-gray-900/5">
            {props.title && (
              <DialogArk.Title className="text-lg font-semibold mb-4">
                {props.title}
              </DialogArk.Title>
            )}
            {props.children}
            <div className="flex justify-end">
              <Button
                variant="secondary"
                onClick={() => props.onOpenChange(false)}
                className="mt-6"
              >
                Close
              </Button>
            </div>
          </DialogArk.Content>
        </DialogArk.Positioner>
      </Portal>
    </DialogArk.Root>
  );
};
