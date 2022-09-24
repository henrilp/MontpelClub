import { TagChevron } from 'phosphor-react-native'
import React from 'react'
import { ActivityIndicator, Text, View, ViewStyle } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import { PickerColor } from '~/assets/theme/color/components/Picker'
import { commonStyles } from '~/assets/theme/common'

import { styles } from './style'

export interface PickerOption {
  /** Label to be displayed */
  readonly label: string

  /** Option value */
  readonly value: string
}

export interface PickerProps {
  /** Label to show above the input */
  label?: string

  /** Input placeholder */
  placeholder?: string

  /** Value that is currently selected */
  value: string

  /** Possible options */
  options: PickerOption[]

  /** Extra styles */
  style?: ViewStyle

  /** Whether the picker should have a margin bottom */
  withMargin?: boolean

  /** Whether the picker has border */
  withBorder?: boolean

  /** Whether the options of the picker are being loaded */
  isLoading?: boolean

  /** Content of the picker. This will replace the default visualization */
  children?: Element | Element[]

  /** Event triggered when the value has changed */
  onChange: (newValue: string) => void
}

/**
 * Picker (select) component.
 */
export function Picker(props: PickerProps) {
  return (
    <View style={styles.wrapper}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}

      <View
        style={[
          styles.container,
          props.withMargin && commonStyles.separationBottom,
          props.withBorder && styles.containerWithBorder,
          props.style,
          props.isLoading && styles.containerLoading,
        ]}>
        <RNPickerSelect
          style={{
            viewContainer: styles.viewContainer,
            iconContainer: styles.iconContainer,
            inputIOS: styles.inputIOS,
            inputAndroid: styles.inputAndroid,
          }}
          placeholder={{
            label: props.placeholder,
            color: PickerColor.placeholder,
          }}
          value={props.value}
          onValueChange={props.onChange}
          Icon={() => <TagChevron/>
          items={props.options}>
          {props.children}
        </RNPickerSelect>
        {/* <Text style={styles.textFix}>{''}</Text> */}

        {props.isLoading && <ActivityIndicator style={styles.loader} color={PickerColor.loader} />}
      </View>
    </View>
  )
}
