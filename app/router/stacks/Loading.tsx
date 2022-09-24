import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoadingView} from '../../views/Loading';

const Stack = createStackNavigator();

/**
 * Stack shown when the app is loading.
 */
export function LoadingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
