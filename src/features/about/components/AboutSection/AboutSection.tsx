import { useTranslation } from 'react-i18next';

import { I18nNamespace } from '@/shared/i18n';
import { Eyebrow } from '@/shared/ui';

import {
  AboutCopy,
  AboutGrid,
  AboutHeading,
  AboutLede,
  AboutSectionRoot,
  AboutTitle,
} from './AboutSection.styled';

export function AboutSection() {
  const { t } = useTranslation(I18nNamespace.Profile);

  return (
    <AboutSectionRoot id="about">
      <AboutGrid>
        <AboutHeading>
          <Eyebrow label={t('about.eyebrow')} />
          <AboutTitle>{t('about.title')}</AboutTitle>
        </AboutHeading>
        <AboutCopy>
          <AboutLede>{t('about.lede')}</AboutLede>
          <p>{t('about.copy')}</p>
        </AboutCopy>
      </AboutGrid>
    </AboutSectionRoot>
  );
}
