import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

import { MainFormView } from '~/views/Authenticated/MainFormView'
import { SwipeView } from '~/views/Authenticated/SwipeView'

type AuthenticatedStackProps = {
  MainForm: undefined
  Swipe: undefined
}

export type AuthenticatedNavigationProp = StackNavigationProp<AuthenticatedStackProps>

const Stack = createStackNavigator<AuthenticatedStackProps>()

/**
 * Stack shown when the user is authenticated. Nothing to see here yet.
 */
export function AuthenticatedStack() {
  // https://reactnavigation.org/docs/Stack-based-navigation
  return (
    <Stack.Navigator
      initialRouteName="MainForm"
      screenOptions={{
        headerTintColor: 'white',
        header: () => null,
      }}>
      <Stack.Screen name="MainForm" component={MainFormView} />
      <Stack.Screen name="Swipe" component={SwipeView} />
    </Stack.Navigator>
  )
}
