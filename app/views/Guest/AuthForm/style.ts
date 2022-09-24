import { StyleSheet } from 'react-native'
import { Color } from '~/assets/theme/color/color'
import { styles as authInputStyles } from '../../../components/AuthInput/style'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  backButton: { flex: 1 },
  fakeRightView: { flex: 1 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0E0E0E',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    marginLeft: 100,
    color: 'blue',
  },
  authSubmitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: authInputStyles.container.height,
    backgroundColor: Color.lightGrey,
    borderRadius: authInputStyles.container.borderRadius,
  },
  authSubmitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.darkGrey,
  },
})
