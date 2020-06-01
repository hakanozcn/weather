
import React from 'react';

import {
    StyleSheet,

    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  

function Card(props) {

  return (
 
        <TouchableOpacity style={[styles.buttonstyle,props.style]} onPress={ props.onPress} >
        {props.children}
     
        </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container:{
       

    },
    buttonstyle:{
       flex:1,
        flexDirection:'row',
        borderBottomWidth :3,
        borderColor:'#fff',
        borderStyle:'solid',
        justifyContent:'space-between',
        padding:20,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
   
  

  });

  export default Card;