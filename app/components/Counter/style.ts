import { StyleSheet } from 'react-native'

import { Color } from '~/assets/theme/color/color'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    width: 32,
    backgroundColor: Color.extraLightGrey,
    borderRadius: 8,
  },
  icon: {
    color: Color.darkGrey,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
    width: '100%',
    paddingHorizontal: '20%',
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    width: '50%',
  },
  number: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    width: 60,
    textAlign: 'center',
  },
})
