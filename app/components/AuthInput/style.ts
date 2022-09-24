import { StyleSheet } from 'react-native'
import { Color } from '~/assets/theme/color/color'
import { styles as textBoxStyle } from '../Textbox/style'

export const styles = StyleSheet.create({
  container: {
    ...textBoxStyle.container,
    backgroundColor: Color.extraLightGrey,
    borderRadius: 16,
    borderWidth: 0,
  },
})
