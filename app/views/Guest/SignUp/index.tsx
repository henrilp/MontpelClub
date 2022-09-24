import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import AuthForm from '../AuthForm'
import { AuthStoreContext } from '~/store/auth.store'

export const SignUp = (props: any) => {
  const { t } = useTranslation()
  const [name, setName] = React.useState<string>()
  const [email, setEmail] = React.useState<string>()
  const [password, setPassword] = React.useState<string>()
  const { fakeLogin, signUp } = useContext(AuthStoreContext)
  const submit = async () => {
    try {
      await signUp(t, 'test')
      await fakeLogin()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AuthForm
        IsLogin={false}
        handleChangeTextName={(text: string) => setName(text)}
        handleChangeTextEmail={(text: string) => setEmail(text)}
        handleChangeTextPassword={(text: string) => setPassword(text)}
        handlePressSubmit={() => submit()}
        // handlePressSubmit={() => props.signUp({ email, password, name })}
      />
    </SafeAreaView>
  )
}
// Styles
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  termsView: {
    paddingTop: 20,
    paddingBottom: 5,
    alignItems: 'center',
  },
  termstext: {
    lineHeight: 20,
    fontSize: 12,
  },
  termsButton: {
    fontWeight: 'bold',
    color: 'blue',
  },
})
export default SignUp
