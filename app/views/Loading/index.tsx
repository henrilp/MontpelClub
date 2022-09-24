import React from 'react'
import { Image, View } from 'react-native'

import { styles } from './style'

/**
 * View to render when the app is loading
 */
export function LoadingView() {
  return (
    <View style={styles.container}>
      <Image source={require('~/assets/images/background.jpeg')} style={styles.image} />
    </View>
  )
}
