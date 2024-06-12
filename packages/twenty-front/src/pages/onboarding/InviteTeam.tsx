import { useCallback } from 'react';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRecoilValue } from 'recoil';
import { IconCopy } from 'twenty-ui';
import { z } from 'zod';

import { SubTitle } from '@/auth/components/SubTitle';
import { Title } from '@/auth/components/Title';
import { currentUserState } from '@/auth/states/currentUserState';
import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { useSetNextOnboardingStep } from '@/onboarding/hooks/useSetNextOnboardingStep';
import { SeparatorLineText } from '@/ui/display/text/components/SeparatorLineText';
import { SnackBarVariant } from '@/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { LightButton } from '@/ui/input/button/components/LightButton';
import { MainButton } from '@/ui/input/button/components/MainButton';
import { TextInputV2 } from '@/ui/input/components/TextInputV2';
import { OnboardingStep, useSendInviteLinkMutation } from '~/generated/graphql';
import { isDefined } from '~/utils/isDefined';

const StyledAnimatedInput = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: ${({ theme }) =>
    `fadeIn ${theme.animation.duration['normal']}s ease-in-out`};
`;

const StyledAnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(8)} 0;
  gap: ${({ theme }) => theme.spacing(4)};
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
`;

const StyledActionLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`;

const validationSchema = z.object({
  emails: z.array(
    z.object({ email: z.union([z.literal(''), z.string().email()]) }),
  ),
});

type FormInput = z.infer<typeof validationSchema>;

export const InviteTeam = () => {
  const theme = useTheme();
  const { enqueueSnackBar } = useSnackBar();
  const [sendInviteLink] = useSendInviteLinkMutation();
  const setNextOnboardingStep = useSetNextOnboardingStep();
  const currentUser = useRecoilValue(currentUserState);
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, isSubmitting },
  } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      emails: [{ email: '' }, { email: '' }, { email: '' }],
    },
    resolver: zodResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails',
  });

  watch(({ emails }) => {
    if (!emails) {
      return;
    }
    const emailValues = emails.map((email) => email?.email);
    if (emailValues[emailValues.length - 1] !== '') {
      append({ email: '' });
    }
    if (emailValues.length > 3 && emailValues[emailValues.length - 2] === '') {
      remove(emailValues.length - 1);
    }
  });

  const getPlaceholder = (emailIndex: number) => {
    if (emailIndex === 0) {
      return 'tim@apple.dev';
    }
    if (emailIndex === 1) {
      return 'craig@apple.dev';
    }
    if (emailIndex === 2) {
      return 'mike@apple.dev';
    }
    return 'phil@apple.dev';
  };

  const copyInviteLink = () => {
    if (isDefined(currentWorkspace?.inviteHash)) {
      const inviteLink = `${window.location.origin}/invite/${currentWorkspace?.inviteHash}`;
      navigator.clipboard.writeText(inviteLink);
      enqueueSnackBar('Link copied to clipboard', {
        variant: SnackBarVariant.Success,
        icon: <IconCopy size={theme.icon.size.md} />,
        duration: 2000,
      });
    }
  };

  const onSubmit: SubmitHandler<FormInput> = useCallback(
    async (data) => {
      const emails = Array.from(
        new Set(
          data.emails
            .map((emailData) => emailData.email.trim())
            .filter((email) => email.length > 0),
        ),
      );
      const result = await sendInviteLink({ variables: { emails } });

      setNextOnboardingStep(OnboardingStep.InviteTeam);

      if (isDefined(result.errors)) {
        throw result.errors;
      }
      if (emails.length > 0) {
        enqueueSnackBar('Invite link sent to email addresses', {
          variant: SnackBarVariant.Success,
          duration: 2000,
        });
      }
    },
    [enqueueSnackBar, sendInviteLink, setNextOnboardingStep],
  );

  if (currentUser?.onboardingStep !== OnboardingStep.InviteTeam) {
    return <></>;
  }

  return (
    <>
      <Title noMarginTop>Invite your team</Title>
      <SubTitle>
        Get the most out of your workspace by inviting your team.
      </SubTitle>
      <StyledAnimatedContainer>
        {fields.map((field, index) => (
          <Controller
            key={index}
            name={`emails.${index}.email`}
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <StyledAnimatedInput>
                <TextInputV2
                  type="email"
                  value={value}
                  placeholder={getPlaceholder(index)}
                  onBlur={onBlur}
                  error={error?.message}
                  onChange={onChange}
                  noErrorHelper
                  fullWidth
                />
              </StyledAnimatedInput>
            )}
          />
        ))}
        {isDefined(currentWorkspace?.inviteHash) && (
          <>
            <SeparatorLineText>Or</SeparatorLineText>
            <StyledActionLinkContainer>
              <LightButton
                title="Copy invitation link"
                accent="tertiary"
                onClick={copyInviteLink}
                Icon={IconCopy}
              />
            </StyledActionLinkContainer>
          </>
        )}
      </StyledAnimatedContainer>
      <StyledButtonContainer>
        <MainButton
          title="Finish"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit(onSubmit)}
          fullWidth
        />
      </StyledButtonContainer>
    </>
  );
};
