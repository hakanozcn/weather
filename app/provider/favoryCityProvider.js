import React,{useState,createContext} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
  } from 'react-native';
export const FavoryCityContext=createContext();
export const FavoryCityProvider=(props)=>{
    const [favoryCities,setFavoryCities]= useState([ {
        name:"İstanbul",
        degree:24,
        status:"Güneşli",
        week:[]
        },
        {
            name:"Ankara",
            degree:24,
            status:"bulutlu",
            week:[]
    }]);
    return (
        <FavoryCityContext.Provider value={[favoryCities,setFavoryCities]}>
            {props.children}
        </FavoryCityContext.Provider>    
    )
}