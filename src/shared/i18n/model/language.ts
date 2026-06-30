export const Language = {
  En: 'en',
} as const;

export type Language = (typeof Language)[keyof typeof Language];

export const SUPPORTED_LANGUAGES = [Language.En] as const;
