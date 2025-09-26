import { FieldError } from '@/shared/components/ui/FieldError';
import Input from '@/shared/components/ui/Input';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  email: z.email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
});

type FormData = z.infer<typeof schema>;

export function ZodForm2() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);

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
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h2>Contact Form (Zod)</h2>

      {/* Email */}
      <form.Field
        name="email"
        validators={{
          onBlur: (value) => {
            const result = schema.shape.email.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
          },
        }}
      >
        {(field) => (
          <div>
            {/* <input
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            /> */}
            <Input
              label="Email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <FieldError message={field.state.meta.errors[0]} />
          </div>
        )}
      </form.Field>

      {/* First Name */}
      <form.Field
        name="firstName"
        validators={{
          onChange: (value) => {
            const result = schema.shape.firstName.safeParse(value);
            return result.success ? undefined : result.error.issues[0].message;
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
            <FieldError message={field.state.meta.errors[0]} />
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
