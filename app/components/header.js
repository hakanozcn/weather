import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default   Header= ({name,navigation})=> {
    const openDraw = ()=>{
        navigation.openDrawer();
    }
   const onpress=(screen)=>{
   
        navigation.navigate(screen);
    
   };
      
    return (
            <View style={styles.maincontainer}>
                <View style={styles.topheader}>
                {
                navigation.canGoBack()&&<TouchableOpacity style={styles.lefticon} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" color="#5c74ac" size={24} />
                </TouchableOpacity>  
                }
                  
                <Text style={styles.textstyle}>
                    {name=="Uyku"?"Uyku Eğitimi":name}
                </Text>
              
               </View>
                <View style={styles.botmenucontainer}>
                <TouchableOpacity style={styles.botmenuitem} onPress={()=>{onpress('Sehirler');}}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons  name='weather-hurricane' size={32} color={name==='Sehirler'?'#cccccc' :'#fff'} />
                        </View>
                          
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botmenuitem} onPress={()=>{onpress('Anasayfa');}}>
                    <View style={ styles.icon}>
                        <MaterialCommunityIcons  name='city' size={32} color={name==='Anasayfa'?'#cccccc' :'#fff'}  />
                    </View>
                    </TouchableOpacity>
                    
                    </View> 
                </View>
    );          
}
const styles=StyleSheet.create({
    maincontainer:{
        width:'100%',
        height:'12%',

    
    },
    topheader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,backgroundColor:'#dcdcdc'

    },
    botmenucontainer:{flex:2,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:-5,backgroundColor:"#343442"},
    botmenuitem:{flex:1,alignItems:'center'},
    buttontextpasif:{fontFamily:'Muli-Regular',color:'#fff', fontSize:9,width:'100%',textAlign:'center', lineHeight:9.2,marginTop: Platform.select({
      ios: 3,
      android: 0,
    })},
    icon:{width:'100%',height:32,alignItems:'center',overflow:'hidden',justifyContent:'center'},
    buttontextaktif:{fontFamily:'Muli-Regular',color:'#cccccc', fontSize:9,width:'100%',textAlign:'center', lineHeight:9.2,marginTop: Platform.select({
      ios: 3,
      android: 0,
    })},
    imagepasif:{ height:32,resizeMode:'contain'},
    imageaktif:{ height:32,resizeMode:'contain',tintColor:'#cccccc'},
    righticon:{
        width:64,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:7
    },
    lefticon:{
        width:64,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:7
    },
    textstyle:{
        color:'#5c74ac',
        fontSize:18,
        fontWeight:"bold"
    }

});
