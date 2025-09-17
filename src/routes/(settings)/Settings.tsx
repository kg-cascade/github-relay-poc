import { Button } from '@/shared/components/ui/Button';
import { Modal } from '@/shared/components/ui/Modal';
import { Switch } from '@/shared/components/ui/Switch';
import { Settings as SettingsIcon } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <>
      <Button
        size={'small'}
        variant={'ghost'}
        icon={SettingsIcon}
        className="mb-4"
        onClick={() => {
          console.log('test');
          setModalOpen(true);
        }}
      />
      <Modal
        open={modalOpen}
        onOpenChange={(open) => {
          console.log('onOpenChange  ', open);
          setModalOpen(open);
        }}
        title="Settings"
      >
        <Switch onClick={toggleTheme}>
          <p>Toggle Theme</p>
        </Switch>
      </Modal>
    </>
  );
}
