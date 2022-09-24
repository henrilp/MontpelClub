import { MapPin } from 'phosphor-react-native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Place } from '~/interfaces/place.interface'

interface PlaceSuggestionProps {
  place: Place
  onPress: (place: Place) => void
}

export const PlaceSuggestion = ({ place, onPress }: PlaceSuggestionProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(place)}>
      <MapPin style={styles.icon} />
      <Text>{place.display}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  icon: {
    marginRight: 10,
  },
})
