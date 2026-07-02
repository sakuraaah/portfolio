import { useTranslation } from 'react-i18next';

import { useTranslatedProject } from '@/features/project/hooks';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';
import { CtaAnchor, CtaArrow } from '@/shared/styles';
import { ChipList, Fact, FactLabel, ImagePanel } from '@/shared/ui';

import {
  FactLinks,
  Facts,
  Gallery,
  HighlightBlock,
  HighlightList,
  ProjectBodyGrid,
  ProjectBodySectionRoot,
  Writeup,
  WriteupArticle,
} from './ProjectBodySection.styled';

type ProjectBodySectionProps = {
  project: Project;
};

export function ProjectBodySection({ project }: ProjectBodySectionProps) {
  const { t } = useTranslation(I18nNamespace.Common);
  const translatedProject = useTranslatedProject(project);
  const hasOverview = Boolean(translatedProject.overview?.length);
  const hasHighlights = Boolean(translatedProject.highlights?.length);
  const hasGallery = Boolean(project.galleryImages?.length);

  return (
    <ProjectBodySectionRoot>
      <ProjectBodyGrid>
        <Facts>
          <Fact label={t('project.body.facts.year')} value={project.year} />

          <Fact
            label={t('project.body.facts.role')}
            value={translatedProject.role}
          />

          <div>
            <FactLabel>{t('project.body.facts.stack')}</FactLabel>
            <ChipList items={translatedProject.stack} />
          </div>

          <FactLinks>
            {project.link && (
              <CtaAnchor $plain href={project.link}>
                {t('project.actions.visitProject')}
                <CtaArrow />
              </CtaAnchor>
            )}

            {project.github && (
              <CtaAnchor $muted $plain href={project.github}>
                {t('project.actions.viewSource')}
                <CtaArrow />
              </CtaAnchor>
            )}
          </FactLinks>
        </Facts>

        <Writeup>
          {hasOverview && (
            <WriteupArticle>
              <h2>{t('project.body.overview')}</h2>
              {translatedProject.overview?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </WriteupArticle>
          )}

          {hasHighlights && (
            <HighlightBlock $withoutTopOffset={!hasOverview}>
              <h2>{t('project.body.highlights')}</h2>
              <HighlightList>
                {translatedProject.highlights?.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </HighlightList>
            </HighlightBlock>
          )}

          {hasGallery && (
            <Gallery>
              {project.galleryImages?.map((image) => (
                <ImagePanel
                  image={image}
                  key={image.src}
                  variant="gallery"
                />
              ))}
            </Gallery>
          )}
        </Writeup>
      </ProjectBodyGrid>
    </ProjectBodySectionRoot>
  );
}
