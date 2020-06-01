/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useContext,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';


import WeatherCard from '../components/weatherCard';

import Header from '../components/header';
import weatherService from '../services/weatherService';

const tema=[
    {name:"tema-1",colors:['#f9cb6d', '#fe80ad']},
    {name:"tema-2",colors:['#00f6ac', '#04f5e6']},
    {name:"tema-2",colors:['#fe8e15', '#ffc850']},
    {name:"tema-2",colors:['#bc63e1', '#652dfa']},
    {name:"tema-2",colors:['#527ff2', '#1456fc']}
];
function DetailScreen(props)  {
    props.name="Ankara";
    const service= new weatherService();
     
    
    
    const getdata=async (name)=>{
        return await service.getWeatherByCityWeek(name) 

     }

     getdata(props.route.params.name).then(data=>setWeatherListe(data.list))
     //props.name
     useEffect(()=>{
      getdata(props.route.params.name).then(data=>setWeatherListe(data.list))

     },[props.name])
    const [weatherListe, setWeatherListe] = useState([]) 
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView  style={styles.container} >
          <View style={styles.container}>
          <Header navigation={props.navigation} name={props.route.params.name} />
        <ScrollView
          contentInsetAdjustmentBehavior="center"
          style={styles.scrollView} contentContainerStyle={{padding:20}}>
              <View style={styles.flexwrap}>
            {
                weatherListe.map((item,index)=>(
                    index%7==0&&
                    <WeatherCard 
                        CityName={new Date(item.dt* 1000).toLocaleDateString()}
                        colors={tema[index%5].colors}
                        degre={item.main.temp}
                        status={item.weather[0].main}
                        key={'cl'+ index}
                    />
                ))
            }
            </View>
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
      flex:1,
      backgroundColor: "#343442",
  
  },
  flexwrap:{
    flex:1,
    justifyContent:'space-evenly',
    flexDirection: "row", flexWrap: "wrap"
  },
  container:{
      flex:1,
      position:'relative'
  }

 
});

export default DetailScreen;
