import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { CounterField } from '~/components/Counter'

interface Props {
  adults: number
  setAdults: (adults: number) => void
  children: number
  setChildren: (children: number) => void
}
export const TravelersView = ({ adults, setAdults, children, setChildren }: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <CounterField
        value={adults}
        onValueChange={(newVal) => setAdults(newVal)}
        label={t('travelersView.adults')}
        max={4}
      />
      <CounterField
        value={children}
        onValueChange={(newVal) => setChildren(newVal)}
        label={t('travelersView.children')}
        max={4}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
})
