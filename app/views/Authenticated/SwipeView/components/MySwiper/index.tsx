import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import DestinationCardsData, { DestinationCard } from '~/assets/images/destinations'
import { deviceWidth } from '~/utils/dimensions'
import { Card } from '../Card'

interface Props {
  swiperRef: React.RefObject<Swiper<any>>
  onSwipedRight: (cardIndex: number) => void
  onSwipedLeft: (cardIndex?: number) => void
  onSwipingLeft: () => void
  onSwipingRight: () => void
  onSwipeAborted: () => void
}

/**
 *  https://github.com/alexbrillant/react-native-deck-swiper#readme
 */
export const MySwiper = ({
  swiperRef,
  onSwipedRight,
  onSwipedLeft,
  onSwipingLeft,
  onSwipingRight,
  onSwipeAborted,
}: Props) => {
  const [maxHeight, setMaxHeight] = useState(0)

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout
        // this line allows cards to take maximal height space, limited by device width (as images are square)
        setMaxHeight(Math.min(height, deviceWidth))
      }}>
      {maxHeight > 0 && (
        <Swiper
          //@ts-ignore
          onSwiping={(x: number) => {
            if (x > 0) {
              onSwipingRight() // used to light the approriate button
            }
            if (x < 0) {
              onSwipingLeft()
            }
          }}
          onSwipedAborted={onSwipeAborted}
          /**** card props *****/
          key={maxHeight} // this forces re-render whenever maxHeight changes, so that flex positioning can be well
          cards={DestinationCardsData}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          useViewOverflow={false}
          renderCard={(card: DestinationCard) => (
            <Card
              card={card}
              // we pass max height for cards here, as they are absolute positioned : flex can't apply
              height={maxHeight}
            />
          )}
          // keyExtractor={(cardIndex) => cardIndex.toString()}
          // cardIndex={state.cardIndex} // index of cards to start from  (default: 0)

          containerStyle={styles.swiper}
          ref={swiperRef}
          // onSwiped={() => onSwiped('general')}
          // onSwipedLeft={() => onSwiped('left')}
          onSwipedRight={(cardIndex) => onSwipedRight(cardIndex)}
          onSwipedLeft={(cardIndex) => onSwipedLeft(cardIndex)}
          // onSwipedTop={() => onSwiped('top')}
          // onSwipedBottom={() => onSwiped('bottom')}
          // onTapCard={swipeLeft}
          // onSwipedAll={onSwipedAllCards}
          stackSize={2}
          stackSeparation={10}
          // animateOverlayLabelsOpacity
          animateCardOpacity
          childrenOnTop
          // swipeBackCard
          // overlayLabels={{
          //   // text that appears on top of the card while swiping
          //   left: {
          //     title: 'NOPE',
          //     style: {
          //       label: styles.labelStyle,
          //       wrapper: {
          //         flexDirection: 'column',
          //         alignItems: 'flex-end',
          //         justifyContent: 'flex-start',
          //         marginTop: 30,
          //         marginLeft: -30,
          //       },
          //     },
          //   },
          //   right: {
          //     title: 'LIKE',
          //     style: {
          //       label: styles.labelStyle,
          //       wrapper: {
          //         flexDirection: 'column',
          //         alignItems: 'flex-start',
          //         justifyContent: 'flex-start',
          //         marginTop: 30,
          //         marginLeft: 30,
          //       },
          //     },
          //   },
          // }}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    maxHeight: deviceWidth, // for square cards
  },
  swiper: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  labelStyle: {
    backgroundColor: 'black',
    borderColor: 'black',
    color: 'white',
    borderWidth: 1,
  },
})
