import { Check } from 'phosphor-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Color } from '~/assets/theme/color/color'

import { styles } from './style'

interface CheckBoxProps {
  value?: boolean
  onValueChange: (value: boolean) => void
  label: string
}
/**
 * @param value : boolean for checked
 * @param onValueChange
 * @param label : label on the right of checkbox
 * Checkbox input
 */
export function CheckBoxField({ value, onValueChange, label }: CheckBoxProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onValueChange(!value)}
        style={[styles.checkbox, value && styles.checkboxChecked]}>
        {value && <Check color={Color.white} />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}
