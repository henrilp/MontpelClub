import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Host} from 'react-native-portalize';

import {AppTheme} from '../assets/theme/common';
import {AuthenticatedStack} from './stacks/Authenticated';
import {GuestStack} from './stacks/Guest';
import {AuthStoreContext} from '../store/auth.store';

/**
 * App navigator
 */
export function Navigator() {
  const {user} = useContext(AuthStoreContext);

  // let stack
  // if (!isInitialized) {
  //   stack = LoadingStack()
  // } else
  //TODO
  const stack = user ? AuthenticatedStack() : GuestStack();
  // dark mode : https://reactnavigation.org/docs/themes/
  return (
    <NavigationContainer theme={AppTheme}>
      {/* Host is used to enable Portalize (full screen modals above tabBar) */}
      <Host>{stack}</Host>
    </NavigationContainer>
  );
}
