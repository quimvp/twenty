import { Controller, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key } from 'ts-key-enum';
import { z } from 'zod';

import { Button } from '@/ui/input/button/components/Button';
import { TextInput } from '@/ui/input/components/TextInput';
import { isDomain } from '~/utils/is-domain';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLinkContainer = styled.div`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

type SettingsAccountsEmailsBlocklistInputProps = {
  updateBlockedEmailList: (email: string) => void;
};

const validationSchema = z
  .object({
    emailOrDomain: z
      .string()
      .trim()
      .email('Invalid email or domain')
      .or(
        z
          .string()
          .refine(
            (value) => value.startsWith('@') && isDomain(value.slice(1)),
            'Invalid email or domain',
          ),
      ),
  })
  .required();

type FormInput = z.infer<typeof validationSchema>;

export const SettingsAccountsEmailsBlocklistInput = ({
  updateBlockedEmailList,
}: SettingsAccountsEmailsBlocklistInputProps) => {
  const { reset, handleSubmit, control } = useForm<FormInput>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchema),
  });

  const submit = handleSubmit((data) => {
    updateBlockedEmailList(data.emailOrDomain);
    reset({ emailOrDomain: '' });
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === Key.Enter) {
      submit();
    }
  };

  return (
    <form onSubmit={submit}>
      <StyledContainer>
        <StyledLinkContainer>
          <Controller
            name="emailOrDomain"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextInput
                placeholder="eddy@gmail.com, @apple.com"
                value={value}
                onChange={onChange}
                error={error?.message}
                onKeyDown={handleKeyDown}
                fullWidth
              />
            )}
          />
        </StyledLinkContainer>
        <Button title="Add to blocklist" type="submit" />
      </StyledContainer>
    </form>
  );
};
