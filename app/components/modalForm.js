import React, {useState} from 'react';
import {Button, Text, View,Picker,StyleSheet,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
function ModalForm(props) {


    return (


        <Modal isVisible={props.isModalVisible}  backdrop={true}
				swipeToClose={true} >
          <View 
            style={styles.container}
            >
              {
                props.children
              }
 
          </View>
        </Modal>
    );
  
}

export default ModalForm;
const styles = StyleSheet.create({
  container:{
    alignItems:'center', borderRadius:20,paddingHorizontal:20,height:'80%',
    backgroundColor:'#fff',width:'100%',
   
  },
  buttonstyle:{
    marginTop:10,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    maxWidth:400,
    width:'80%',
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
    position:'relative',
    marginTop:10,
  },
  titlestyle:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  }

 
});