import { IconProps } from 'phosphor-react-native'
import React, { useMemo, useState } from 'react'
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

import { TextboxColor } from '~/assets/theme/color/components/Textbox'

import { styles } from './style'

export interface TextboxProps extends TextInputProps {
  customContainerStyles?: StyleProp<ViewStyle>

  /** Label to show above the input */
  label?: string

  /** Input placeholder */
  placeholder?: string

  /** icon component to show */
  Icon?: ({ weight, color, size, style, mirrored }: IconProps) => JSX.Element

  value: string

  /** Whether the value is a password */
  isPassword?: boolean

  /** Whether the input should fit in the space */
  fit?: boolean

  error?: string

  onInput: (value: string) => void

  onFocus?: () => void

  onBlur?: () => void
}

/**
 * Text input
 */
export function Textbox({
  customContainerStyles,
  label,
  placeholder,
  Icon,
  value,
  isPassword,
  fit,
  error,
  onInput,
  onFocus,
  onBlur,
}: TextboxProps) {
  const [isDirty, setDirty] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [focused, setFocused] = useState(false)

  const containerStyles = useMemo(
    () => [styles.container, focused && styles.containerFocused],
    [focused],
  )

  const inputStyles = useMemo(
    () => ({ ...styles.input, ...(isDirty && error && styles.inputError) }),
    [isDirty, error],
  )
  const placeholderColor = useMemo(() => {
    if (isDirty && error) {
      return TextboxColor.placeholder.error
    }
    return focused ? TextboxColor.placeholder.focused : TextboxColor.placeholder.default
  }, [focused, isDirty, error])

  function localOnInput(text: any) {
    setDirty(true)
    onInput(text)
  }

  return (
    <View style={[styles.wrapper, fit && styles.wrapperFit]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={customContainerStyles ?? containerStyles}>
        <TextInput
          placeholder={!focused ? placeholder : ''}
          placeholderTextColor={placeholderColor}
          style={inputStyles}
          value={value}
          secureTextEntry={isPassword && !passwordVisible}
          onChangeText={localOnInput}
          onFocus={() => {
            onFocus?.()
            setFocused(true)
          }}
          onBlur={() => {
            onBlur?.()
            setFocused(false)
          }}
        />

        {Icon && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )}

        {isPassword && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.iconContainer}>
            {/* TODO
             <Icon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              style={[
                styles.icon,
                passwordVisible ? styles.iconBlack : styles.iconGrey,
                styles.iconBig,
              ]}
            /> */}
          </TouchableOpacity>
        )}
      </View>

      {isDirty && error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}
