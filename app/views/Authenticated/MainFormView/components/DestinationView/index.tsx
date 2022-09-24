import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { commonValues } from '~/assets/theme/common'
import { Place } from '~/interfaces/place.interface'
import { deviceHeight } from '~/utils/dimensions'
import { PlaceAutocomplete } from './components/PlaceAutocomplete'
import { SelectedPlace } from './components/SelectedPlace'

interface Props {
  departure: Place | undefined
  setDeparture: (departure: Place | undefined) => void
  destination: Place | undefined
  setDestination: (destination: Place | undefined) => void
}
/**
 * A view to select ONE departure place and ONE destination place
 * fixed height.
 * @returns
 */
export const DestinationView = ({
  departure,
  setDeparture,
  destination,
  setDestination,
}: Props) => {
  const { t } = useTranslation()
  // this var is used to hide the second field when choosing from the first one
  const [showField, setShowField] = useState(true)

  return (
    <View style={styles.container}>
      {departure ? (
        <SelectedPlace
          type="from"
          display={departure.display}
          onRemove={() => setDeparture(undefined)}
        />
      ) : (
        <PlaceAutocomplete
          onFocus={() => setShowField(false)}
          onBlur={() => setShowField(true)}
          placeholder={t('destinationView.departurePlaceholder')}
          onPlaceSelected={(newDeparture) => {
            setDeparture(newDeparture)
            setShowField(true)
          }}
        />
      )}
      {showField && destination ? (
        <SelectedPlace
          type="to"
          display={destination.display}
          onRemove={() => setDestination(undefined)}
        />
      ) : showField ? (
        <PlaceAutocomplete
          placeholder={t('destinationView.destinationPlaceholder')}
          onPlaceSelected={(newDestination) => setDestination(newDestination)}
        />
      ) : null}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: deviceHeight * 0.5,
    alignItems: 'center',
    paddingHorizontal: commonValues.paddingHorizontal,
  },
})
