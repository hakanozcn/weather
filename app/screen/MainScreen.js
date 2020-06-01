/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';


import Citycard from '../components/cityCard';
import  {FavoryCityContext} from '../provider/favoryCityProvider'
import Header from '../components/header';
const tema=[
    {name:"tema-1",colors:['#f9cb6d', '#fe80ad']},
    {name:"tema-2",colors:['#00f6ac', '#04f5e6']},
    {name:"tema-2",colors:['#fe8e15', '#ffc850']},
    {name:"tema-2",colors:['#bc63e1', '#652dfa']},
    {name:"tema-2",colors:['#527ff2', '#1456fc']}
];
function MainScreen(props)  {
   
    const  [favoryCities,setFavoryCities] = useContext(FavoryCityContext);    
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView  style={styles.container} >
          <View style={styles.container}>
          <Header navigation={props.navigation} name={props.route.name} />
        <ScrollView
          contentInsetAdjustmentBehavior="center"
          style={styles.scrollView} contentContainerStyle={{alignItems:'center'}}>
            {
                favoryCities.map((item,index)=>(
                    <Citycard 
                        CityName={item.name}
                        colors={tema[index].colors}
                        key={'cl'+ index}
                        onprees={()=>{
                          props.navigation.navigate("Detailsceens",{name:item.name})
                        }}
                    />
                ))
            }
        </ScrollView>
      {/*  <View>
        <ModalForm isModalVisible={isModalVisible}
           tema={tema} 
            />
      </View> */  }
        </View>
      </SafeAreaView>
  
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#343442",
  
  },
  container:{
      flex:1,
      position:'relative'
  }

 
});

export default MainScreen;
