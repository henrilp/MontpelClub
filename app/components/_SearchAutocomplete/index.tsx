import { MagnifyingGlass } from 'phosphor-react-native'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { getLocalCityList } from '~/api/places/localSearch'
import { Place } from '~/interfaces/place.interface'
import { Textbox } from '../Textbox'

/********* NOT USED **********/
export const SearchAutocomplete = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Place[]>([])

  const updateSearch = async (search: string) => {
    setValue(search)

    if (search.length === 0) {
      setData([])
      return
    }

    setLoading(true)
    try {
      // API CALL
      const newData = getLocalCityList(search)
      setData(newData)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, width: '100%', textAlign: 'center', paddingBottom: 20 }}>
        Look for a City
      </Text>
      <Textbox
        Icon={MagnifyingGlass}
        placeholder="Type Here..."
        onInput={updateSearch}
        value={value}
      />
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data.length > 0 && (
            <View>
              {data.map((item, i) => (
                <Text key={i}>{item}</Text>
              ))}
            </View>
          )
        )}
      </View>
    </View>
  )
}
