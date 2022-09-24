import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CalendarList } from 'react-native-calendars'
import { Color } from '~/assets/theme/color/color'
import { DateData } from '~/interfaces/date.interface'
import { setupConfig } from './localeConfig'
import { getDateString, getPeriod } from './utils'
import theme from './theme'

// define custom styles
const selectedDayStyle = {
  color: Color.neonBlue,
}

interface CalendarProps {
  startDay?: DateData | undefined
  endDay?: DateData | undefined
  onDayPress: (day: DateData) => void
}

/**
 * A controlled Durationc Calendar component (horizontal)
 * https://github.com/wix/react-native-calendars
 * @returns A calendar component that allows to pick periods of time
 */
export const Calendar = ({ startDay, endDay, onDayPress }: CalendarProps) => {
  const { i18n } = useTranslation()
  // adapt the calendar to the current language
  useCallback(() => setupConfig(i18n.language), [i18n.language])

  const todayDateString = getDateString(Date.now())
  return (
    <CalendarList
      horizontal
      pagingEnabled
      showScrollIndicator // doesn't work ?
      pastScrollRange={0}
      futureScrollRange={10} // months
      theme={theme}
      minDate={todayDateString}
      markingType="period" // use "dayComponent(state)" for custom rendering ?
      onDayPress={onDayPress}
      markedDates={getPeriod(startDay, endDay, selectedDayStyle)}
      firstDay={i18n.language === 'en' ? 1 : 0} // 0: Sunday, 1: Monday, USA begins on Sunday
    />
  )
}
