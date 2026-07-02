import { Trans, useTranslation } from 'react-i18next';

import { profile } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
import {
  CtaAnchor,
  CtaArrow,
  Eyebrow,
  ImagePanel,
  SocialLinks,
} from '@/shared/ui';

import {
  HeroActions,
  HeroCopy,
  HeroGrid,
  HeroSectionRoot,
  HeroTitle,
} from './HeroSection.styled';

export function HeroSection() {
  const { t } = useTranslation(I18nNamespace.Profile);

  return (
    <HeroSectionRoot>
      <HeroGrid>
        <div>
          <Eyebrow label={t('role')} animated heroSpacing />
          <HeroTitle $animation="rise1">
            <Trans
              components={{ accent: <em /> }}
              i18nKey="hero.title"
              ns={I18nNamespace.Profile}
            />
          </HeroTitle>
          <HeroCopy $animation="rise3">{t('hero.copy')}</HeroCopy>
          <HeroActions $animation="rise4">
            <CtaAnchor href="#work">
              {t('hero.cta.work')}
              <CtaArrow />
            </CtaAnchor>
            <SocialLinks links={profile} size="sm" />
          </HeroActions>
        </div>
        <ImagePanel
          animation="image"
          image={profile.heroImage}
          variant="portrait"
        />
      </HeroGrid>
    </HeroSectionRoot>
  );
}
