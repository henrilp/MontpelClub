import { useNavigation } from '@react-navigation/native'
import { Heart, X } from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DestinationCard } from '~/assets/images/destinations'
import { Color } from '~/assets/theme/color/color'
import { commonValues } from '~/assets/theme/common'
import { CTAButton } from '~/components/CTAButton'
import { AuthenticatedNavigationProp } from '~/stacks/Authenticated'
import { Counter } from './components/Counter'
import { MySwiper } from './components/MySwiper'

const NEEDED_RIGHT_SWIPES = 5
/**
 * THIS VIEW HAS TO BE IN ABSOLUTE POSITIONING
 * https://github.com/alexbrillant/react-native-deck-swiper#readme
 * @returns
 */
export const SwipeView = () => {
  // temp : simulate header height
  const [tempHeader, setTempHeader] = useState(false)
  // used for buttons lighting
  const [showRightButton, setShowRightButton] = useState(false)
  const [showLeftButton, setShowLeftButton] = useState(false)

  const [validatedCardIndexes, setValidatedCardIndexes] = useState<number[]>([])
  const { t } = useTranslation()

  const navigation = useNavigation<AuthenticatedNavigationProp>()

  const swiperRef = useRef<Swiper<DestinationCard>>(null)

  const swipeLeft = () => {
    swiperRef.current?.swipeLeft()
  }
  const swipeRight = () => {
    swiperRef.current?.swipeRight()
  }
  const onSwipedRight = (cardIndex: number) => {
    setValidatedCardIndexes([...validatedCardIndexes, cardIndex])
    setShowRightButton(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* TEMP  HEADER TO TEST HEIGHT CHANGE */}
      <TouchableOpacity
        onPress={() => setTempHeader(!tempHeader)}
        style={{
          ...{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.lightGrey,
          },
          ...(tempHeader && { height: 200 }),
        }}>
        <Text>{'temporary : click to see how the view adapts to height'}</Text>
      </TouchableOpacity>
      <Text style={styles.instructions}>{t('swipeView.instructions')}</Text>
      <Counter total={NEEDED_RIGHT_SWIPES} current={validatedCardIndexes.length} />

      {/* Swiper is like a modal, it doesn't include in flex view. We have a "fake" box to define its position */}
      <MySwiper
        swiperRef={swiperRef}
        onSwipeAborted={() => {
          setShowLeftButton(false)
          setShowRightButton(false)
        }}
        onSwipedLeft={() => setShowLeftButton(false)}
        onSwipedRight={onSwipedRight}
        onSwipingLeft={() => {
          setShowLeftButton(true)
          setShowRightButton(false)
        }}
        onSwipingRight={() => {
          setShowRightButton(true)
          setShowLeftButton(false)
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.swipeButton, ...(showLeftButton && styles.leftClicked) }}
          onPress={swipeLeft}>
          <X color={showLeftButton ? Color.white : Color.darkPurple} size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.swipeButton, ...(showRightButton && styles.rightClicked) }}
          onPress={swipeRight}>
          <Heart
            color={showRightButton ? Color.white : Color.lightPurple}
            weight={showRightButton ? 'fill' : undefined}
            size={28}
          />
        </TouchableOpacity>
      </View>
      <View>
        <CTAButton
          backgroundColor={Color.neonBlue}
          textColor={Color.black}
          onPress={() => null}
          text={t('swipeView.continue')}
          disabled={validatedCardIndexes.length < NEEDED_RIGHT_SWIPES}
        />
        <TouchableOpacity style={styles.previous} onPress={() => navigation.goBack()}>
          <Text style={styles.previousText}>{t('swipeView.previous')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: commonValues.paddingHorizontal,
    justifyContent: 'space-between',
  },
  instructions: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Color.darkGrey,
    paddingHorizontal: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  swipeButton: {
    padding: 14,
    marginHorizontal: 14,
    marginVertical: 28,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.white,
  },
  leftClicked: {
    backgroundColor: Color.darkPurple,
  },
  rightClicked: {
    backgroundColor: Color.lightPurple,
  },
  previous: {
    width: '100%',
    alignItems: 'center',
  },
  previousText: {
    color: Color.darkGrey,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
})
