import { StyleSheet } from 'react-native'

import { Color } from '~/assets/theme/color/color'
import { Fonts } from '~/assets/theme/fonts'
import { deviceHeight } from '~/utils/dimensions'

const MODAL_WIDTH = 415
export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  closeButton: {
    paddingHorizontal: 28,
  },
  container: {
    backgroundColor: Color.white,
    borderRadius: 6,
    flexDirection: 'column',
    height: '80%',
    justifyContent: 'space-between',
    paddingBottom: 20,
    width: MODAL_WIDTH,
  },
  content: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: 30,
    width: '100%',
  },
  divider: {
    backgroundColor: Color.lightGrey,
    height: 1,
    marginBottom: 15,
    //marginHorizontal: 21,
    width: '100%',
  },
  modal: {
    alignSelf: 'center',
    height: deviceHeight,
    justifyContent: 'center',
  },
  title: {
    color: Color.black,
    // fontFamily: Fonts.Medium,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  titleBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 28,
    paddingRight: 0,
    width: '100%',
  },
})
