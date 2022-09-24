import { DateData } from 'react-native-calendars'
import { MarkedDates } from 'react-native-calendars/src/types'

/**
 * @param timestamp timestamp in milliseconds
 * @returns date string in format YYYY-MM-DD
 */
export const getDateString = (timestamp: number) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  let dateString = `${year}-`
  if (month < 10) {
    dateString += `0${month}-`
  } else {
    dateString += `${month}-`
  }
  if (day < 10) {
    dateString += `0${day}`
  } else {
    dateString += day
  }

  return dateString
}

/**
 * @param startDay dateData object of the start day
 * @param endDay dateData object of the end day
 * @param selectedDayStyle style applied in the calendar
 * @returns object with the marked dates
 */
export const getPeriod = (
  startDay: DateData | undefined,
  endDay: DateData | undefined,
  selectedDayStyle: any,
): MarkedDates => {
  if (!startDay) {
    return {}
  }
  // If no end day, mark only start day
  if (!endDay) {
    return { [startDay.dateString]: { startingDay: true, endingDay: true, ...selectedDayStyle } }
  }
  // If end day is after start day, mark period (we fill period object day by day)
  const period: MarkedDates = {}
  const startTimestamp = startDay.timestamp
  let currentTimestamp = startTimestamp
  while (currentTimestamp < endDay.timestamp) {
    const dateString = getDateString(currentTimestamp)
    period[dateString] = {
      startingDay: currentTimestamp === startTimestamp,
      ...selectedDayStyle,
    }
    currentTimestamp += 24 * 60 * 60 * 1000
  }
  period[endDay.dateString] = {
    endingDay: true,
    ...selectedDayStyle,
  }
  return period
}
