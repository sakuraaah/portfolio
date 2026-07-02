import { IconArrowUp } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { I18nNamespace } from '@/shared/i18n';

import {
  BackToTopLink,
  FooterGroup,
  FooterInner,
  FooterName,
  FooterRoot,
} from './Footer.styled';

type FooterProps = {
  profileName: string;
};

export function Footer({ profileName }: FooterProps) {
  const { t } = useTranslation(I18nNamespace.Common);

  return (
    <FooterRoot>
      <FooterInner fluid>
        <FooterGroup justify="space-between" gap={20} wrap="wrap">
          <FooterName component="span">{profileName}</FooterName>
          <span>{t('footer.credit')}</span>
          <BackToTopLink href="#top">
            {t('footer.backToTop')}
            <IconArrowUp aria-hidden="true" size={14} stroke={1.8} />
          </BackToTopLink>
        </FooterGroup>
      </FooterInner>
    </FooterRoot>
  );
}
