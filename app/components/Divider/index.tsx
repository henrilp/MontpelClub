import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '~/assets/theme/color/color'

interface Props {
  text: string
}

export const Divider = ({ text }: Props) => (
  <View style={styles.container}>
    <View style={styles.divider} />
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.divider} />
  </View>
)

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  divider: { flex: 1, height: 1, backgroundColor: Color.white },
  text: { width: 50, textAlign: 'center', color: Color.white },
})
