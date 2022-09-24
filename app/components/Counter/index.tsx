import { Minus, Plus } from 'phosphor-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Color } from '~/assets/theme/color/color'

import { styles } from './style'

interface CounterProps {
  value: number
  onValueChange: (value: number) => void
  label: string
  max: number
}
/**
 * Counter input, it takes all width offered
 */
export function CounterField({ value, onValueChange, label, max }: CounterProps) {
  const minusDisabled = value <= 0
  const plusDisabled = value >= max
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={[styles.button]}
        disabled={minusDisabled}
        onPress={() => {
          onValueChange(value - 1)
        }}>
        <Minus color={minusDisabled ? Color.lightGrey : Color.black} />
      </TouchableOpacity>
      <Text style={styles.number}>{value}</Text>
      <TouchableOpacity
        style={[styles.button]}
        disabled={plusDisabled}
        onPress={() => {
          onValueChange(value + 1)
        }}>
        <Plus color={plusDisabled ? Color.lightGrey : Color.black} />
      </TouchableOpacity>
    </View>
  )
}
