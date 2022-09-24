import { StyleSheet } from 'react-native'

import { Color } from '~/assets/theme/color/color'
import { Fonts } from '~/assets/theme/fonts'

export const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: Color.white,
    borderColor: Color.grey,
    borderWidth: 1,
    height: 24,
    width: 24,
  },
  checkboxChecked: {
    backgroundColor: Color.primary,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    width: '100%',
  },
  label: {
    // fontFamily: Fonts.Regular,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 18,
    marginLeft: 9,
  },
})
