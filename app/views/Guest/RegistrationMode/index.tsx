import { AppleLogo, Envelope, GoogleLogo } from 'phosphor-react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Color } from '~/assets/theme/color/color'
import { CTAButton } from '~/components/CTAButton'
import { Divider } from '~/components/Divider'
// import dayImages from '../../../assets/images/RegistrationMode/Day'
import nightImages from '../../../assets/images/RegistrationMode/Night'
import { AuthBottom } from '../AuthBottom'
import {} from '../../../../app.json'
export const RegistrationMode = () => {
  const { t } = useTranslation()
  return (
    <ImageBackground source={nightImages[3]} style={{ width: '100%', height: '100%' }}>
      <View style={{ flex: 1 }} />

      <View style={styles.container}>
        <CTAButton
          Icon={<GoogleLogo color={Color.darkGrey} />}
          text={t('registrationMode.continueWithGoogle')}
          onPress={() => {}}
          backgroundColor={Color.white}
          textColor={Color.darkGrey}
        />
        <CTAButton
          Icon={<AppleLogo color={Color.white} weight="fill" />}
          text={t('registrationMode.continueWithApple')}
          onPress={() => {}}
          backgroundColor={Color.black}
          textColor={Color.white}
        />
        <Divider text={t('registrationMode.or')} />
        <CTAButton
          Icon={<Envelope />}
          text={t('registrationMode.continueWithEmail')}
          onPress={() => {}}
          backgroundColor={Color.white}
          textColor={Color.darkGrey}
        />
        <AuthBottom
          isLogin={false}
          showTerms
          textColor={Color.white}
          actionColor={Color.neonBlue}
        />
      </View>
    </ImageBackground>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
})
