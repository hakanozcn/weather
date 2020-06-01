
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screen/MainScreen';
import DetailScreen from '../screen/DetailScreen';
import SearchCityScreen from '../screen/SearchCityScreen';
import 'react-native-gesture-handler';


function Navigator() {
  console.log("navigator");
  const Stack = createStackNavigator();
  return (
   
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
         }}>
          
          <Stack.Screen name="Sehirler" component={SearchCityScreen}  />
          <Stack.Screen name="Anasayfa" component={MainScreen} />
          <Stack.Screen name="Detailsceens" component={DetailScreen}  />
        </Stack.Navigator>
       
    
    </NavigationContainer>
 
  );
}
export default Navigator;