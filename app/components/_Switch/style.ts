import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 4,
    height: 14,
    left: 3,
    position: 'absolute',
    top: 5,
    width: 14,
    zIndex: 10,
  },

  container: {
    alignItems: 'center',
    borderRadius: 14,
    flexDirection: 'row',
    height: 24,
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    width: 42,
  },
})
