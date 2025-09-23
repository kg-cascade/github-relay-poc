import i18n from '@/i18n';
import { Button } from '@/shared/components/ui/Button';
import { ControlledCombobox } from '@/shared/components/ui/DropdownCombobox';
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

  const [value, setValue] = useState<string | null>(
    localStorage.getItem('language') || null
  );

  const options = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Polish', value: 'pl' },
  ];

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
        <div className="flex flex-col gap-6">
          <Switch onClick={toggleTheme}>
            <p>Toggle Theme</p>
          </Switch>
          <ControlledCombobox
            items={options}
            selectedValue={value}
            onChange={(option) => {
              if (option) {
                i18n.changeLanguage(option);
                localStorage.setItem('language', option);
                setValue(option);
              }
            }}
            label="Choose language"
            placeholder="Search..."
            maxHeight="150px"
            zIndex={2000}
          />
        </div>
      </Modal>
    </>
  );
}
