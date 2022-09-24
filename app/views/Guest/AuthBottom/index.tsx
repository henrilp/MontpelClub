import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Color } from '~/assets/theme/color/color'
import { termsOfServiceLink, privacyPolicyLink } from '../../../../app.json'

interface Props {
  isLogin: boolean
  showTerms?: boolean
  textColor?: string
  actionColor?: string
}

export const AuthBottom = ({ isLogin, showTerms, textColor, actionColor }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <View style={styles.signInOrSignUpContainer}>
        <Text style={{ ...styles.signInOrSignUpText, ...(textColor && { color: textColor }) }}>
          {`${
            isLogin
              ? t('authForm.dontHaveAnAccountQuestion')
              : t('authForm.alreadyHaveAnAccountQuestion')
          } `}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ ...styles.underlineButton, ...(actionColor && { color: actionColor }) }}>
            {isLogin ? t('authForm.signUp') : t('authForm.signIn')}
          </Text>
        </TouchableOpacity>
      </View>
      {showTerms && (
        <SafeAreaView style={styles.termsView}>
          <Text style={styles.termstext}>{t('registrationMode.bySigningUpYouAgreeToOur')}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(termsOfServiceLink)}>
            <Text style={{ ...styles.underlineButton, ...(actionColor && { color: actionColor }) }}>
              {` ${t('registrationMode.termsOfService')} `}
            </Text>
          </TouchableOpacity>
          <Text style={styles.termstext}> {t('registrationMode.and')} </Text>
          <TouchableOpacity onPress={() => Linking.openURL(privacyPolicyLink)}>
            <Text style={{ ...styles.underlineButton, ...(actionColor && { color: actionColor }) }}>
              {` ${t('registrationMode.privacyPolicy')}. `}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </>
  )
}

export const styles = StyleSheet.create({
  signInOrSignUpText: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.darkGrey,
  },
  signInOrSignUpContainer: {
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    flexDirection: 'row',
  },
  underlineButton: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.black,
    textDecorationLine: 'underline',
  },
  termstext: {
    color: Color.white,
    fontSize: 13,
  },
  termsView: {
    flexDirection: 'row',
  },
})
