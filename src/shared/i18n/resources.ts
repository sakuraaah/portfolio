import { enCommon, enProfile, enProjects } from './locales';
import { I18nNamespace, Language } from './model';

export const resources = {
  [Language.En]: {
    [I18nNamespace.Common]: enCommon,
    [I18nNamespace.Profile]: enProfile,
    [I18nNamespace.Projects]: enProjects,
  },
} as const;
