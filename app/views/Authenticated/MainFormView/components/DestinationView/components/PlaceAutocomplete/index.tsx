import { MagnifyingGlass } from 'phosphor-react-native'
import React, { useState } from 'react'
import { ActivityIndicator, Keyboard, View } from 'react-native'
import { getLocalCityList } from '~/api/places/localSearch'
import { Textbox } from '~/components/Textbox'
import { Place } from '~/interfaces/place.interface'
import { PlaceSuggestion } from './components/PlaceSuggestion'

interface PlaceAutocompleteProps {
  placeholder: string
  onPlaceSelected: (place: any) => void
  onFocus?: () => void
  onBlur?: () => void
}

/**
 * Place Autocomplete component
 */
export const PlaceAutocomplete = ({
  placeholder,
  onPlaceSelected,
  onFocus,
  onBlur,
}: PlaceAutocompleteProps) => {
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Place[]>([])

  const updateTextAndSuggestions = async (search: string) => {
    setText(search)

    if (search === '') {
      setData([])
      return
    }
    setLoading(true)
    try {
      // API CALL // TEMP
      const newData = getLocalCityList(search)
      setData(newData)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const onSuggestionPressed = (suggestion: Place) => {
    Keyboard.dismiss()
    // clean the text and the suggestions, as we remove the component
    setText('')
    setData([])
    onPlaceSelected(suggestion)
    onBlur && onBlur()
  }

  return (
    <View>
      <Textbox
        fit
        Icon={MagnifyingGlass}
        placeholder={placeholder}
        onInput={updateTextAndSuggestions}
        value={text}
        onFocus={onFocus && onFocus}
        //onBlur={onBlur && onBlur}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        data.length > 0 && (
          <View>
            {data.map((item, i) => (
              <PlaceSuggestion place={item} key={i} onPress={onSuggestionPressed} />
            ))}
          </View>
        )
      )}
    </View>
  )
}
// const styles = StyleSheet.create({
//   container: {},
// })
