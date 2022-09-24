import { Check } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from '~/assets/theme/color/color'

interface CardFieldProps {
  Icon: any
  label: string
  onPress: () => void
  value: string
  validated: boolean
}

const CheckIcon = () => (
  <View style={styles.iconContainer}>
    <Check color={Color.black} size={16} />
  </View>
)
export const CardField = ({ Icon, label, onPress, value, validated }: CardFieldProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.labelContainer}>
        <Icon />
        <Text style={styles.label}>{label}</Text>
      </View>
      {validated ? (
        <View style={styles.validatedContainer}>
          <Text style={styles.validatedText}>{value}</Text>
          <CheckIcon />
        </View>
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Color.neonBlue,
    borderRadius: 24,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderColor: Color.lightGrey,
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 6,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  value: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  validatedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  validatedText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: Color.darkGrey,
    marginRight: 12,
  },
})
