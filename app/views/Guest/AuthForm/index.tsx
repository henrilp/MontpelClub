import { CaretLeft } from 'phosphor-react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { AuthInput } from '~/components/AuthInput'
import { AuthBottom } from '../AuthBottom'
import { styles } from './style'

const AuthForm = (props: any) => {
  const { t } = useTranslation()
  const {
    isLogin,
    handleChangeTextName,
    handleChangeTextEmail,
    handleChangeTextPassword,
    handlePressSubmit,
  } = props
  const [showPass, setShowPass] = useState(true)
  const [press, setPress] = useState(false)

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => {}}>
        <CaretLeft />
      </TouchableOpacity>
      <Text style={styles.title}> {isLogin ? t('authForm.signIn') : t('authForm.signUp')} </Text>
      <View style={styles.fakeRightView} />
    </View>
  )
  const SwitchShowPass = () => {
    setPress(!press)
    setShowPass(press)
  }
  const DateOfBirth = () => (
    <AuthInput
      label={t('authForm.dateOfBirth')}
      placeholder={t('authForm.dateOfBirthPlaceHolder')}
      value={''}
      // autoCapitalize={'words'}
      // autoCompleteType={'name'}
      // keyboardType={'default'}
      onInput={handleChangeTextName}
    />
  )
  const ForgotPassword = () => (
    <TouchableOpacity
      style={styles.forgotPasswordButton}
      onPress={() => this.props.history.push('/forgotPassword')}>
      <Text style={styles.forgotPasswordText}>{t('authForm.forgotPasswordQuestion')}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
        }}>
        <Header />
        <AuthInput
          label={t('authForm.email')}
          // isRequired={!isLogin}
          placeholder={t('authForm.emailPlaceHoler')}
          value={''}
          onInput={handleChangeTextEmail}
          // autoCapitalize={'none'}
          // autoCompleteType={'email'}
          // keyboardType={'email-address'}
        />
        <AuthInput
          label={t('authForm.password')}
          // isRequired={!isLogin}
          // rightIcon={Platform.select({
          //   native: () => (
          //     <TouchableOpacity activeOpacity={0.7} onPress={() => SwitchShowPass()}>
          //       <IconCrossPlatform
          //         type={'material-community'}
          //         color={MainLightBlueColor}
          //         nativeName={showPass ? 'eye' : 'eye-off'}
          //         webName={MdRemoveRedEye}
          //       />
          //     </TouchableOpacity>
          //   ),
          // })}
          // secureTextEntry={showPass}
          placeholder="********"
          value={''}
          // autoCompleteType={'password'}
          onInput={handleChangeTextPassword}
        />
        {!isLogin && DateOfBirth()}
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity style={styles.authSubmitButton} onPress={() => handlePressSubmit()}>
          <Text style={styles.authSubmitButtonText}>
            {isLogin ? t('authForm.signIn') : t('authForm.signUp')}
          </Text>
        </TouchableOpacity>
        {isLogin && ForgotPassword()}
        <AuthBottom isLogin={isLogin} />
      </View>
    </SafeAreaView>
  )
}
export default AuthForm
