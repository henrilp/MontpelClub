import { StyleSheet } from 'react-native'

import { deviceHeight, deviceWidth } from '~/utils/dimensions'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    bottom: 0,
    height: deviceHeight,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: deviceWidth,
  },
})
