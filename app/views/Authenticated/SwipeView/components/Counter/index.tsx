import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Color, GradientArray } from '~/assets/theme/color/color'

interface Props {
  total: number
  current: number
}

const HEIGHT = 6
export const Counter = ({ total, current }: Props) => {
  const currentWidth = Math.min(current / total, 1) * 100 + '%'
  return (
    <View style={styles.container}>
      <View style={styles.total} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={GradientArray}
        style={{ ...styles.current, width: currentWidth }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 16,
    height: HEIGHT,
  },
  total: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: HEIGHT,
    backgroundColor: Color.lightGrey,
    borderRadius: HEIGHT,
  },
  current: {
    position: 'absolute',
    left: 0,
    height: HEIGHT,
    backgroundColor: Color.neonBlue,
    borderRadius: HEIGHT,
  },
})
