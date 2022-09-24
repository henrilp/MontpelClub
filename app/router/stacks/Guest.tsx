import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignUp from '~/views/Guest/SignUp'

const Stack = createStackNavigator()

/**
 * Stack used when the user is not authenticated. Shows ways to authenticate.
 */
export function GuestStack() {
  // SEE https://reactnavigation.org/docs/auth-flow/
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      {/* <Stack.Screen name="SignIn" component={SignInView2} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}
