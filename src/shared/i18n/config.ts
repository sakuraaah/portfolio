import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { I18nNamespace, Language, SUPPORTED_LANGUAGES } from './model';
import { resources } from './resources';

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    defaultNS: I18nNamespace.Common,
    fallbackLng: Language.En,
    interpolation: {
      escapeValue: false,
    },
    lng: Language.En,
    ns: Object.values(I18nNamespace),
    resources,
    returnNull: false,
    supportedLngs: [...SUPPORTED_LANGUAGES],
  });
}

export { i18n };
