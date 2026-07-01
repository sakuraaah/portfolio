import {
  BackArrow,
  CtaAnchor,
  CtaArrow,
  CtaRouterLink,
} from '@/features/project/styles';

import { profile } from '@/shared/constants';

import {
  MoreActions,
  MoreInner,
  MoreSection,
} from './ProjectMoreSection.styled';

export function ProjectMoreSection() {
  return (
    <MoreSection>
      <MoreInner>
        <h2>Want to see more?</h2>
        <MoreActions>
          <CtaRouterLink to="/#work">
            <BackArrow />
            Back to all work
          </CtaRouterLink>
          <CtaAnchor $muted href={`mailto:${profile.email}`}>
            Get in touch
            <CtaArrow />
          </CtaAnchor>
        </MoreActions>
      </MoreInner>
    </MoreSection>
  );
}
