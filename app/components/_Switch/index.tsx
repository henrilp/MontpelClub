import React from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native'

import { styles } from './style'

export interface SwitchProps {
  /** Whether the switch is active or not */
  readonly active?: boolean

  /** Switch extra style for the container (normally for positioning and such) */
  readonly style?: ViewStyle

  /** Event triggered when the switch is toggled */
  onToggle: (active: boolean) => void

  /** Is switch disabled ? */
  disabled?: boolean
}

/**
 * TODO
 * @param param0
 * @returns
 */
export function Switch({ active, style, onToggle, disabled }: SwitchProps) {
  return (
    <TouchableOpacity
      style={style}
      disabled={disabled}
      onPress={() => onToggle(!active)}
      activeOpacity={0.9}
    >
      <View style={[styles.container]} />
    </TouchableOpacity>
  )
}
