import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Color } from '~/assets/theme/color/color'

const THUMB_RADIUS = 16

const Thumb = () => {
  return <View style={styles.root} />
}

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 9,
    borderColor: Color.black,
    backgroundColor: Color.white,
  },
})

export default memo(Thumb)
