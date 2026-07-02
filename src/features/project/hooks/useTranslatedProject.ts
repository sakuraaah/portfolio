import { useTranslation } from 'react-i18next';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';

export function useTranslatedProject(project: Project): Project {
  const { t } = useTranslation(I18nNamespace.Common);
  const baseKey = `project.content.${project.id}`;

  const translateValue = (field: string, defaultValue: string) =>
    t(`${baseKey}.${field}`, { defaultValue });

  const translateList = (field: string, values: string[]) =>
    values.map((value, index) =>
      t(`${baseKey}.${field}.${index}`, { defaultValue: value })
    );

  return {
    ...project,
    title: translateValue('title', project.title),
    role: translateValue('role', project.role),
    type: translateValue('type', project.type),
    description: translateValue('description', project.description),
    overview: translateList('overview', project.overview),
    highlights: translateList('highlights', project.highlights),
  };
}
