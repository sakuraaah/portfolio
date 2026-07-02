import { useTranslation } from 'react-i18next';

import { profile } from '@/shared/constants';
import { I18nNamespace } from '@/shared/i18n';
import { BackArrow, CtaAnchor, CtaArrow, CtaRouterLink } from '@/shared/ui';

import {
  MoreActions,
  MoreInner,
  MoreSection,
} from './ProjectMoreSection.styled';

export function ProjectMoreSection() {
  const { t } = useTranslation(I18nNamespace.Projects);

  return (
    <MoreSection>
      <MoreInner>
        <h2>{t('more.title')}</h2>
        <MoreActions>
          <CtaRouterLink to="/#work">
            <BackArrow />
            {t('actions.backToAllWork')}
          </CtaRouterLink>
          <CtaAnchor $muted href={`mailto:${profile.email}`}>
            {t('actions.getInTouch')}
            <CtaArrow />
          </CtaAnchor>
        </MoreActions>
      </MoreInner>
    </MoreSection>
  );
}
