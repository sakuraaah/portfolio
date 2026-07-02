import { Trans, useTranslation } from 'react-i18next';

import { profile } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
import { CtaArrow } from '@/shared/styles';
import { Eyebrow, SocialLinks } from '@/shared/ui';

import {
  ContactCard,
  ContactCopy,
  ContactSectionRoot,
  ContactTitle,
  EmailLink,
} from './ContactSection.styled';

export function ContactSection() {
  const { t } = useTranslation(I18nNamespace.Profile);

  return (
    <ContactSectionRoot id="contact">
      <ContactCard>
        <Eyebrow label={t('contact.eyebrow')} centered />
        <ContactTitle>
          <Trans
            components={{ accent: <em /> }}
            i18nKey="contact.title"
            ns={I18nNamespace.Profile}
          />
        </ContactTitle>
        <ContactCopy>{t('contact.copy')}</ContactCopy>
        <EmailLink $soft href={`mailto:${profile.email}`}>
          {profile.email}
          <CtaArrow />
        </EmailLink>
        <SocialLinks size="lg" />
      </ContactCard>
    </ContactSectionRoot>
  );
}
