import { LocaleConfig } from 'react-native-calendars'
import fr from '~/assets/dateLocales/fr'

export const setupConfig = (locale: string) => {
  // add needed locales. Default "en" is already included, but duplicated in assets/dateLocales/en.ts if needed

  if (locale === 'fr') {
    LocaleConfig.locales.fr = {
      monthNames: fr.monthNames,
      monthNamesShort: fr.monthNamesShort,
      dayNames: fr.dayNames,
      dayNamesShort: fr.dayNamesShort,
      today: fr.today,
    }
  }
  LocaleConfig.defaultLocale = locale
}
