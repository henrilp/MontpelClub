import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { AuthStoreContext } from '~/store/auth.store'

import { styles } from './style'

/**
 *
 * @returns Displays "connected as {{username}}"
 */
export function ConnectedAs() {
  const { user } = useContext(AuthStoreContext)
  const { t } = useTranslation()
  return (
    <View style={styles.connectedAsContainer}>
      <Text style={styles.connectedAs}>
        {t('authenticated.common.connectedAs', { name: user?.firstname + ' ' + user?.lastname })}
      </Text>
    </View>
  )
}
