import { Types } from '@/shared/components/Toast';
import { createFileRoute } from '@tanstack/react-router';
import { ValibotForm } from './-components/ValibotForm';
import { ZodForm2 } from './-components/ZodForm2';

export const Route = createFileRoute('/contact-us/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ZodForm2 />
      <ValibotForm className="mt-4" />
      <Types />
    </div>
  );
}
