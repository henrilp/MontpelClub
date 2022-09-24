import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface DateButtonProps {
  timestamp: number
  type: 'start' | 'end'
  onPress: () => void
}
export const DateButton = ({ timestamp, type, onPress }: DateButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>
        {type} {timestamp}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
