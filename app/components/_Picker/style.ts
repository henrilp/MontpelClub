import { StyleSheet } from 'react-native'

import { PickerColor } from '~/assets/theme/color/components/Picker'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  containerLoading: {
    opacity: 0.5,
  },
  containerWithBorder: {
    borderColor: PickerColor.border,
    borderWidth: 1,
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },

  iconContainer: { right: 0, top: 16 },
  inputAndroid: { color: PickerColor.inputAndroid },
  inputIOS: { height: 59, marginLeft: 10 },

  label: {
    color: PickerColor.label,
    fontSize: 16,
    marginBottom: 15,
  },

  loader: {
    alignSelf: 'center',
    left: '50%',
    position: 'absolute',
  },

  textFix: { bottom: 0, height: 60, left: 0, position: 'absolute', width: '100%' },

  viewContainer: { flex: 1, height: 59 },

  wrapper: {
    width: '100%',
  },
})
