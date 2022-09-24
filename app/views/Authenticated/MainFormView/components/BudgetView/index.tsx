import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import { commonValues } from '~/assets/theme/common'
import { RangeSlider } from './RangeSlider'

interface Props {
  low: number
  setLow: (low: number) => void
  high: number
  setHigh: (high: number) => void
  localizedStepLabels: string[]
}
export const BudgetView = ({ low, setLow, high, setHigh, localizedStepLabels }: Props) => {
  const { t } = useTranslation()

  const onValueChanged = (newLow: number, newHigh: number) => {
    setLow(newLow)
    setHigh(newHigh)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{t('budgetView.title')}</Text>
        <Text style={styles.range}>
          {localizedStepLabels[low] + ' - ' + localizedStepLabels[high]}
        </Text>
      </View>
      <RangeSlider stepLabels={localizedStepLabels} onValueChanged={onValueChanged} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: commonValues.paddingHorizontal,
    paddingTop: 24,
    paddingBottom: 52,
  },
  textContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Value-Bold',
    fontSize: 16,
  },
  range: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
  },
})
