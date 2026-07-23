import { Trans, useTranslation } from 'react-i18next';

import { profile } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
import {
  ActionGroup,
  CtaAnchor,
  CtaArrow,
  DisplayTitle,
  Eyebrow,
  ImagePanel,
  LeadText,
  SocialLinks,
} from '@/shared/ui';

import { HeroGrid, HeroSectionRoot } from './HeroSection.styled';

export function HeroSection() {
  const { t } = useTranslation(I18nNamespace.Profile);

  return (
    <HeroSectionRoot>
      <HeroGrid>
        <div>
          <Eyebrow label={t('role')} animated heroSpacing />
          <DisplayTitle $animation="rise1">
            <Trans
              components={{ accent: <em /> }}
              i18nKey="hero.title"
              ns={I18nNamespace.Profile}
            />
          </DisplayTitle>
          <LeadText $animation="rise3">{t('hero.copy')}</LeadText>
          <ActionGroup $animation="rise4" $stackOnMobile>
            <CtaAnchor href="#work">
              {t('hero.cta.work')}
              <CtaArrow />
            </CtaAnchor>
            <SocialLinks links={profile} size="sm" />
          </ActionGroup>
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
