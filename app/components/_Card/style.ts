import { StyleSheet } from 'react-native'

import { CardColor } from '~/assets/theme/color/components/Card'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: CardColor.container,
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  containerWithMargin: {
    marginBottom: 30,
  },
})
