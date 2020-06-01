import React,{useState,useContext} from 'react';
import { Button,Alert } from 'react-native-paper';
import {View,Text,FlatList,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import Card from '../components/card'
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import  {FavoryCityContext} from '../provider/favoryCityProvider'
import DropdownAlert from 'react-native-dropdownalert';
import Header from '../components/header';
import ModalForm from '../components/modalForm'
export default SearchCity =(props)=> {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const [editIndex,setEditIndex] = useState(-1)
    const [modalVisible,setModalVisible] = useState(false);
    const  [favoryCities,setFavoryCities] = useContext(FavoryCityContext); 
    const fetchCities = (text)=>{
        setCity(text)
        fetch("https://autocomplete.wunderground.com/aq?query="+text)
        .then(item=>item.json())
        .then(cityData=>{
            setCities(cityData.RESULTS.slice(0,9))
        })
    }
    const listClick = async (cityname)=>{
        cityname=cityname.split(',')[0];
        cityname=cityname.replace(/\//g,'');
        let k=favoryCities.find((item)=>item.name==cityname?true:false)
        if(editIndex<0){
            if(favoryCities.length<5 && !k){

                setFavoryCities([...favoryCities,{
                   name:cityname,
                   degree:24,
                   status:"bulutlu",
                   week:[]
                   }])  
                   setCities([])
                   setCity("");
                   setModalVisible(false)
                   dropDownAlertRef.alertWithType('success', 'Başarılı', 'Seçmiş oldugunuz Sehir Başarıyla eklendi.')
                     
              }
              else if(k){
            
               dropDownAlertRef.alertWithType('warming', 'Uyarı', 'Bir Şehri birden fazla kez şeçemezsiniz!')
               setCity("");
               setModalVisible(false)
              }
              else{
                setCity("");
                setModalVisible(false)
               dropDownAlertRef.alertWithType('error', 'Hata', 'En fazla 5 tane sehir  şeçebilirsiniz')
              }
        }
        else{

            let data=[...favoryCities];
            data[editIndex].name=cityname;
            setFavoryCities(data);
            setCity("");
            setModalVisible(false)
            setEditIndex(-1);
            dropDownAlertRef.alertWithType('success', 'Başarılı', 'Güncelleme İşlemi Başarılı .')
        }
      
      
    }
    const listdelete= (index)=>{
        let array=[...favoryCities]
         array.splice(index,1);
        
        setFavoryCities( array)
    }
    const listEdit=(index)=>{
        setEditIndex(index);
        //setCity(favoryCities[index].name);
        setModalVisible(true)
    }
    return (
        <View style={styles.container}>
              <Header navigation={props.navigation} name={props.route.name} />
              <ModalForm   isModalVisible={modalVisible} >
              <TouchableOpacity style={{position:'absolute',top:10 ,right:10,zIndex:5,backgroundColor:'red',borderRadius:20,padding:6}} onPress={()=>setModalVisible(false)}>
								<AntDesign name="close" size={16} color='#fff' />
				</TouchableOpacity>
              <View style={{flex:1, }}>
           <View style={styles.input}>  
           <View style={{flex:1,justifyContent:'center'}}>
           <AntDesign name="search1" style={{ position:'absolute',left:10}} size={18} />
            </View>     
          <TextInput
            label="Sehir adı"
            value={city}
            onChangeText={(text)=>fetchCities(text)}
            underlineColorAndroid="transparent"
            style={{flex:4,color:'#000'}}
            
          />
          </View>
         
        <FlatList
        data={cities}
        style={{marginTop:10,flex:1}}
        renderItem={({item,index})=>{
            return(
                <Card 
                onPress={()=>listClick(item.name)}
               
                 style={{backgroundColor:index%2==0?'#222222':'#484848'}}
               >
                   <Text style={{color:'#ffff'}} >{item.name}</Text>
                   <Entypo  name="add-to-list" size={22} color="#ffff" />
                 
               </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />
        </View>
        </ModalForm>
        <View>
            <Text> Seçilen Sehirler</Text>
         </View>   
         <FlatList
        data={favoryCities}
     
        renderItem={({item,index})=>{
            return(
                <Card 
                
                 onPress={()=>listdelete(index)}
                  style={{backgroundColor:index%2==0?'#859974':'#623a43'}}
                >
                    <Text style={{color:'#ffff'}} >{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <AntDesign  name="delete" size={22} color="#ffff" />
                    <TouchableOpacity onPress={()=>listEdit(index)} style={{marginLeft:10}}>
                   <AntDesign  name="edit" size={22} color="#ffff" />
                    </TouchableOpacity>
                   </View> 
                </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />
        <View style={{position:'absolute',top:30,zIndex:3,width:'100%'}}>
        <DropdownAlert ref={ref => dropDownAlertRef = ref}  containerStyle={{
            backgroundColor: 'red',
          }}/>
        
        </View>  
      <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={()=>setModalVisible(true)}>
          <AntDesign name="plus" size={32} color='#fff'/>
        </TouchableOpacity>
     </View>
    );
 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',  
           position:'relative',
    },
    input: {
        marginTop:10,
        backgroundColor: 'rgba(255,255,255,0.4)',
        width:'80%',
        color: '#000',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#000',
        flexDirection:'row'
        
        
      },
      TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        right: 32,
        bottom: 32,
        backgroundColor:'#859974',
        borderRadius:32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
     },
  });