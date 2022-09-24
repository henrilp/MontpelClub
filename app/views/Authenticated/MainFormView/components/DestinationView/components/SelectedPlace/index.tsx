import { X } from 'phosphor-react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Color } from '~/assets/theme/color/color'

interface SelectedPlaceProps {
  display: string
  onRemove: () => void
  type: 'from' | 'to'
}
export const SelectedPlace = ({ display, onRemove, type }: SelectedPlaceProps) => {
  const { t } = useTranslation()
  return (
    <TouchableOpacity style={styles.container} onPress={onRemove}>
      <Text style={styles.text}>{t('destinationView.' + type) + ' ' + display}</Text>
      <X style={styles.remove} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.extraLightGrey,
    borderRadius: 12,
    padding: 8,
    marginBottom: 24, // same as TextBox
    height: 50, // same height as TextBox for consistency
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  remove: {
    marginLeft: 8,
  },
})
