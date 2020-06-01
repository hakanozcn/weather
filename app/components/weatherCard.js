
import React  ,{ useEffect, useState}from 'react';

import {
    StyleSheet,

    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

 

function WeatherCard({CityName,colors,degre,status}) {
    const  renderIcon=(status)=>{
        if(status=='Clouds'){
            return (<Image source={require('../image/meteorology.png') } />);
        }
        else if(status=="Rain"){
           return <Image source={require('../image/storm.png') } />;
        }
        else{
            return <Image source={require('../image/sun.png') } />;
        }
    
    
      }
  return (
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>  
          <TouchableOpacity style={styles.buttonstyle} >
            <View style={styles.iconcontainer}>
             {
                 renderIcon(status)
             }          
            </View>
            <View style={styles.textcontainer}>
                <Text style={[styles.textStyle,{fontSize:14}]}>{CityName}</Text>
                <Text style={[styles.textStyle,{fontSize:10}]}>{status}</Text>
            </View>
            <View style={styles.degrecontainer}>
            <Text style={[styles.textStyle,{fontSize:14}]}>{(degre).toFixed(1)}</Text>
            <Text style={[styles.textStyle,{fontSize:10}]}> °</Text>
            </View>
            </TouchableOpacity>
       
      </LinearGradient>  
  );
}

const styles = StyleSheet.create({
    container:{
        width:'40%',
        maxWidth:200,
        height:120,
        borderRadius:20,
        backgroundColor:'red',
        marginTop:10,
        shadowColor: "#454545",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        justifyContent:"center",
        alignItems:"center",

    },
    buttonstyle:{
        flex:1,
        flexDirection:'column',
    },
    iconcontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textcontainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    degrecontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        
    },
    textStyle:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:12
    }

  });

  export default WeatherCard;