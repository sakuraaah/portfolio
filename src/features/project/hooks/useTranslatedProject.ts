import { useTranslation } from 'react-i18next';

import { type Project } from '@/entities/project';

import { I18nNamespace } from '@/shared/i18n';

type TranslatedProject = Project & {
  description: string;
  highlights?: string[];
  overview?: string[];
  role: string;
  title: string;
  type: string;
};

export function useTranslatedProject(project: Project): TranslatedProject {
  const { i18n, t } = useTranslation(I18nNamespace.Projects);
  const baseKey = `content.${project.id}`;

  const translateList = (field: string) => {
    const key = `${baseKey}.${field}`;

    if (!i18n.exists(key, { ns: I18nNamespace.Projects })) {
      return undefined;
    }

    const translatedValue = t(key, { returnObjects: true });

    return Array.isArray(translatedValue)
      ? translatedValue.filter(
          (item): item is string => typeof item === 'string'
        )
      : undefined;
  };

  return {
    ...project,
    title: t(`${baseKey}.title`),
    role: t(`${baseKey}.role`),
    type: t(`${baseKey}.type`),
    description: t(`${baseKey}.description`),
    overview: translateList('overview'),
    highlights: translateList('highlights'),
  };
}
