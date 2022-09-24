import { X } from 'phosphor-react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import dateLocales from '~/assets/dateLocales/dateLocales'
import { Color } from '~/assets/theme/color/color'
import { logger } from '~/helpers/logger'
import { DateData } from '~/interfaces/date.interface'

interface DateButtonProps {
  type: 'from' | 'to'
  date?: DateData | undefined
  remove: () => void
}
const getWeekDay = (timestamp: number): number => {
  const date = new Date(timestamp)
  return date.getDay()
}
const formatDate = (date: DateData, locale: 'fr' | 'en') => {
  const dateLocale = dateLocales[locale]
  if (!dateLocale) {
    logger.error('Date locale not found')
    return 'Locale not found, please contact support'
  }
  const { monthNamesShort, dayNamesShort } = dateLocale
  const { day, month } = date
  const weekDay = getWeekDay(date.timestamp)
  return `${dayNamesShort[weekDay]} ${day} ${monthNamesShort[month]}`
}

// const dateFormatter = (date: DateData) => {}
export const DateButton = ({ type, date, remove }: DateButtonProps) => {
  const { t, i18n } = useTranslation()
  return (
    <TouchableOpacity
      onPress={remove}
      style={{ ...styles.container, ...(type === 'from' && styles.rightBorder) }}>
      <View style={styles.textContainer}>
        <Text style={styles.type}>{t('durationView.' + type)}</Text>
        <Text style={styles.day}>
          {date &&
            formatDate(
              date,
              // @ts-ignore  // IGNORED BECAUSE i18n.language can be different from "en" or "fr"
              i18n.language,
            )}
        </Text>
      </View>
      {date && (
        <View style={styles.x}>
          <X size={18} />
        </View>
      )}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 76,
    flex: 1,
    position: 'relative',
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: Color.lightGrey,
  },
  textContainer: {
    position: 'absolute',
    top: 20,
    left: 16,
  },
  type: {
    fontFamily: 'Value-Bold',
    fontSize: 16,
  },
  day: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  x: {
    marginRight: 16,
    position: 'absolute',
    right: 12,
    top: 26,
  },
})
