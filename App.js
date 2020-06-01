/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  View,
  StatusBar,
} from 'react-native';


import Navigator from './app/navigator/Navigator'

import {FavoryCityProvider} from './app/provider/favoryCityProvider'

function App()   {
  return (
    <View  style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
    <FavoryCityProvider>
     <Navigator />
     
    </FavoryCityProvider>
    </View>
  );
};



export default App;
