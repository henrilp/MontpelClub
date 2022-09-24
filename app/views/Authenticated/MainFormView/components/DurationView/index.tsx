import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Color } from '~/assets/theme/color/color'
import { commonValues } from '~/assets/theme/common'
import { DateData } from '~/interfaces/date.interface'
import { Calendar } from '~/views/Authenticated/MainFormView/components/DurationView/components/Calendar'
import { DateButton } from './components/DateButton'

interface Props {
  startDay: DateData | undefined
  setStartDay: (date: DateData | undefined) => void
  endDay: DateData | undefined
  setEndDay: (date: DateData | undefined) => void
}
export const DurationView = ({ startDay, setStartDay, endDay, setEndDay }: Props) => {
  /**
   * If no start day or is before start day, sets start day (erase end day if needed)
   * Else, sets end day
   * @param day DateData
   */
  const onDayPress = (day: DateData) => {
    if (!startDay) {
      setStartDay(day)
    } else if (!endDay && day.timestamp > startDay.timestamp) {
      setEndDay(day)
    } else {
      setStartDay(day)
      setEndDay(undefined)
    }
  }

  return (
    <View style={styles.container}>
      {(startDay || endDay) && (
        <View style={styles.durationContainer}>
          <DateButton type="from" date={startDay} remove={() => setStartDay(undefined)} />
          <DateButton type="to" date={endDay} remove={() => setEndDay(undefined)} />
        </View>
      )}
      <Calendar startDay={startDay} endDay={endDay} onDayPress={onDayPress} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: commonValues.paddingHorizontal, // calendar needs container to be full width
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.lightGrey,
    borderRadius: 16,
    marginHorizontal: commonValues.paddingHorizontal, // calendar needs container to be full width
    marginBottom: 16,
  },
})
