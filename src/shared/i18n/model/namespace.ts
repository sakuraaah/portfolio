export const I18nNamespace = {
  Common: 'common',
} as const;

export type I18nNamespace = (typeof I18nNamespace)[keyof typeof I18nNamespace];
