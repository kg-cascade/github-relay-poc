import { FieldError } from '@/shared/components/ui/FieldError';
import Input from '@/shared/components/ui/Input';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  email,
  minLength,
  object,
  pipe,
  safeParse,
  string,
  type InferOutput,
} from 'valibot';

interface ValibotFormProps {
  className?: string;
}

export function ValibotForm(props: ValibotFormProps) {
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const { t } = useTranslation('contactUs');

  const schema = object({
    email: pipe(string(), email('errors.emailInvalid')),
    firstName: pipe(string(), minLength(3, 'errors.firstNameRequired')),
  });

  type FormData = InferOutput<typeof schema>;

  const form = useForm({
    defaultValues: {
      email: '',
      firstName: '',
    },
    onSubmit: async ({ value }) => {
      const result = safeParse(schema, value);
      if (result.success) {
        setSubmitted(result.output);
      } else {
        console.error('Form validation failed on submit:', result.issues);
      }
    },
  });

  return (
    <div className={props.className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <h2>Valibot form</h2>

        {/* Email Field */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              const result = safeParse(schema.entries.email, value);
              return result.success ? undefined : result.issues[0]?.message;
            },
          }}
        >
          {(field) => (
            <div>
              <Input
                label={t('labels.email')}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                //   isInvalid={!!field.state.meta.errors[0]}
              />

              <FieldError message={field.state.meta.errors[0]} />
            </div>
          )}
        </form.Field>

        {/* First Name Field */}
        <form.Field
          name="firstName"
          validators={{
            onChange: ({ value }) => {
              const result = safeParse(schema.entries.firstName, value);
              return result.success ? undefined : result.issues[0]?.message;
            },
          }}
        >
          {(field) => (
            <div>
              <Input
                label={t('labels.firstName')}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                //   isInvalid={!!field.state.meta.errors[0]}
              />

              <FieldError message={field.state.meta.errors[0]} />
            </div>
          )}
        </form.Field>

        <button type="submit">{t('form:submit_button')}</button>

        {submitted && (
          <div style={{ marginTop: '1rem' }}>
            <h3>{t('form:submitted_data_title')}</h3>
            <pre>{JSON.stringify(submitted, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
}
