import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { styles } from './style'

interface CardProps {
  /** Content of the card */
  children: Element | Element[]

  /** Whether the card should have margin bottom */
  withMargin?: boolean

  /** Extra styles */
  style?: StyleProp<ViewStyle>
}

/**
 * Component that shows some information inside a card.
 */
export function Card(props: CardProps) {
  const outerStyles = Array.isArray(props.style) ? props.style : [props.style]

  return (
    <View
      style={[styles.container, props.withMargin && styles.containerWithMargin, ...outerStyles]}
    >
      {props.children}
    </View>
  )
}
