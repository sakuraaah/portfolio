import { enCommon } from './locales';
import { I18nNamespace, Language } from './model';

export const resources = {
  [Language.En]: {
    [I18nNamespace.Common]: enCommon,
  },
} as const;
