import React from 'react'
import { Color } from '~/assets/theme/color/color'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
interface Props {
  text: string
  onPress: () => void
  backgroundColor?: string
  textColor?: string
  disabled?: boolean
  style?: any
  Icon?: JSX.Element
}

/**
 * A CTA button
 */
export const CTAButton = ({
  text,
  onPress,
  backgroundColor,
  textColor,
  style,
  disabled,
  Icon,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        // look priority on style
        ...styles.container,
        ...(backgroundColor && { backgroundColor }),
        ...style,
        ...(disabled && styles.disabledContainer),
        ...(Icon && { flexDirection: 'row' }),
      }}
      onPress={() => !disabled && onPress()}>
      <View style={styles.icon}>{Icon && Icon}</View>
      <Text
        style={{
          ...styles.text,
          ...(textColor && { color: textColor }),
          ...(disabled && styles.disabledText),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 12,
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  disabledContainer: {
    backgroundColor: Color.lightGrey,
  },
  disabledText: {
    color: Color.darkGrey,
  },
  icon: { right: 16 },
})
