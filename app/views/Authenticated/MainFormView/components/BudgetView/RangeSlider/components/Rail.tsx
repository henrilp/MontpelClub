import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Color } from '~/assets/theme/color/color'

const Rail = () => {
  return <View style={styles.root} />
}

export default memo(Rail)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: Color.extraLightGrey,
  },
})
