import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DestinationCard } from '~/assets/images/destinations'
import { Color } from '~/assets/theme/color/color'
import { commonValues } from '~/assets/theme/common'
import { deviceWidth } from '~/utils/dimensions'

interface Props {
  card: DestinationCard
  height: number
}
export const Card = ({ card, height }: Props) => {
  // here we have some cache pb with the image ?
  // https://reactnative.dev/docs/image#resolveassetsource
  return (
    <View style={{ ...styles.card, height }}>
      <Image
        style={styles.image}
        // @ts-ignore
        source={card.source}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <View style={styles.textOverlay} />
        <Text style={styles.text}>{card.label}</Text>
      </View>
    </View>
  )
}
// <Image
//   style={styles.image}
//   source={{
//     uri: faker.image.city(400, 400),
//     // cache: 'reload',
//   }}

const styles = StyleSheet.create({
  card: {
    width: deviceWidth - commonValues.paddingHorizontal * 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.45,
    backgroundColor: Color.black,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  text: {
    color: Color.white,
    fontFamily: 'Value-Bold',
    fontSize: 18,
    opacity: 1,
  },
})
