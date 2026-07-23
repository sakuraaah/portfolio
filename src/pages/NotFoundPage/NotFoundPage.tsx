import { Trans, useTranslation } from 'react-i18next';

import { I18nNamespace } from '@/shared/i18n';
import {
  ActionGroup,
  BackArrow,
  CtaRouterLink,
  DisplayTitle,
  Eyebrow,
  LeadText,
} from '@/shared/ui';

import {
  NotFoundArtwork,
  NotFoundCopy,
  NotFoundGrid,
  NotFoundMain,
  NotFoundMarker,
  NotFoundNumber,
  NotFoundOrbit,
  NotFoundStatus,
} from './NotFoundPage.styled';

export function NotFoundPage() {
  const { t } = useTranslation(I18nNamespace.Common);

  return (
    <NotFoundMain id="top">
      <NotFoundGrid>
        <NotFoundCopy>
          <Eyebrow animated heroSpacing label={t('notFound.eyebrow')} />
          <DisplayTitle $animation="rise1">
            <Trans
              components={{ accent: <em /> }}
              i18nKey="notFound.title"
              ns={I18nNamespace.Common}
            />
          </DisplayTitle>
          <LeadText $animation="rise3">{t('notFound.description')}</LeadText>
          <ActionGroup $animation="rise4">
            <CtaRouterLink to="/">
              <BackArrow />
              {t('notFound.actions.home')}
            </CtaRouterLink>
          </ActionGroup>
        </NotFoundCopy>

        <NotFoundArtwork aria-hidden="true">
          <NotFoundNumber>404</NotFoundNumber>
          <NotFoundOrbit>
            <NotFoundMarker />
          </NotFoundOrbit>
          <NotFoundStatus>{t('notFound.status')}</NotFoundStatus>
        </NotFoundArtwork>
      </NotFoundGrid>
    </NotFoundMain>
  );
}
