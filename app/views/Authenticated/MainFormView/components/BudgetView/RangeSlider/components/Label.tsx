import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Color } from '~/assets/theme/color/color'

interface Props {
  text: string
}
export const Label = ({ text }: Props) => {
  return <Text style={styles.label}>{text}</Text>
}
const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Color.darkGrey,
    textAlign: 'center',
    marginBottom: 8,
  },
})
