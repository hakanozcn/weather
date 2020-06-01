
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
  import weatherService from '../services/weatherService';
 

function Citycard({CityName,colors,onprees}) {
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
      const getInfo=(CityName)=>{ 
        setLoading(true);
        return new Promise((resolve, reject) => {
             service.getWeatherByCity(CityName)
                resolve (service.getWeatherByCity(CityName));
                });
    }
    const [cityInfo,setCityInfo]=useState({weather:[{main:""}],main:{temp:0}});
    const [loading,setLoading]=useState(false);
    const service= new weatherService();
   


    useEffect(()=>{

       getInfo(CityName).then(result=>{
            if(result.cod==401){
                console.log(result.message);
                
            }
            else if(result.cod==404){
                setCityInfo({ ...cityInfo, error:true,message: result.message});
            }

            else {
                setCityInfo({ ...result,error:false,message:null});
              
            }
            setLoading(false);
           
       });

    },[CityName])
  return (
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.container}>  
       {
           loading==false?cityInfo.error?(<Text>{cityInfo.message}</Text>):(<TouchableOpacity style={styles.buttonstyle} onPress={()=>onprees()} >
            <View style={styles.iconcontainer}>
             {
                 renderIcon(cityInfo.weather[0].main)
             }          
            </View>
            <View style={styles.textcontainer}>
                <Text style={[styles.textStyle,{fontSize:20}]}>{CityName}</Text>
                <Text style={[styles.textStyle,{fontSize:12}]}>{cityInfo.weather[0].main}</Text>
            </View>
            <View style={styles.degrecontainer}>
            <Text style={[styles.textStyle,{fontSize:24}]}>{(cityInfo.main.temp-273).toFixed(1)}</Text>
            <Text style={[styles.textStyle,{fontSize:28}]}> °</Text>
            </View>
            </TouchableOpacity>):<ActivityIndicator size="large" color="#ffff"  />
       } 
      </LinearGradient>  
  );
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        maxWidth:400,
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
        flexDirection:'row',
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

  export default Citycard;