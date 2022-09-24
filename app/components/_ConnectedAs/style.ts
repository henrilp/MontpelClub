import { StyleSheet } from 'react-native'

import { Color } from '~/assets/theme/color/color'
import { Fonts } from '~/assets/theme/fonts'

export const styles = StyleSheet.create({
  connectedAs: {
    alignSelf: 'flex-end',
    // fontFamily: Fonts.Italic,
    letterSpacing: 1,
    padding: 20,
  },
  connectedAsContainer: {
    backgroundColor: Color.whiteGrey,
    flexDirection: 'column',
    marginTop: 'auto',
    width: '100%',
  },
})
