import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import { getLocales } from 'react-native-localize'
import en from './en'
import fr from './fr'

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
}
export const setupI18n = () =>
  i18n.use(initReactI18next).init({
    lng: 'en', // getLocales()?.[0]?.languageCode ?? 'en', // FOR NOW ONLY USE ENGLISH
    fallbackLng: 'en',
    resources,
    compatibilityJSON: 'v3',
    debug: process.env.NODE_ENV === 'development',
  })
