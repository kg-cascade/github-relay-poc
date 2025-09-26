import i18n from '@/i18n';
import Input from '@/shared/components/ui/Input';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { z } from 'zod';
import { useZodSchema } from '../-hooks/useZodSchema';

type FormData = z.infer<ReturnType<typeof useZodSchema>['full']>;

export function ZodForm() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const schema = useZodSchema();

  const form = useForm({
    defaultValues: {
      email: '',
      firstName: '',
    },
    onSubmit: async ({ value }) => {
      setSubmitted(value);
    },
  });

  return (
    <form
      key={i18n.language}
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h2>Contact Form (Zod)</h2>

      <form.Field
        name="email"
        validators={{
          onChange: (value) => {
            const result = schema.fields.email.safeParse(value);
            return result.success
              ? undefined
              : (result.error?.issues?.[0]?.message ?? 'Invalid email');
          },
        }}
      >
        {(field) => (
          <div>
            <Input
              label="Email"
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors[0] && (
              <div style={{ color: 'red' }}>{field.state.meta.errors[0]}</div>
            )}
          </div>
        )}
      </form.Field>

      {/* First Name Field z użyciem komponentu Input */}
      <form.Field
        name="firstName"
        validators={{
          onChange: (value) => {
            const result = schema.fields.firstName.safeParse(value);
            return result.success
              ? undefined
              : (result.error?.issues?.[0]?.message ?? 'Required');
          },
        }}
      >
        {(field) => (
          <div>
            <Input
              label="First Name"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors[0] && (
              <div style={{ color: 'red' }}>{field.state.meta.errors[0]}</div>
            )}
          </div>
        )}
      </form.Field>

      <button type="submit">Submit</button>

      {submitted && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Submitted data:</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}
