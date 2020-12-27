import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import {Avatar,Icon} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import db from '../config';
export default class Drawer2 extends Component{
constructor(){
    super();
    this.state={
        userid:firebase.auth().currentUser.email,image:'',docId:'',name:'',studentdetails:[]
    }
}

    render(){
        return(
            <View style={styles.container}>
         
          <DrawerItems
          {...this.props}/>
         
         <View>
         <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() => {
              this.props.navigation.navigate("Welcome");
              firebase.auth().signOut();
            }}
          >
            <Icon
             name="logout"
             type="antdesign"
          
            />
            <Text>Log Out</Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          
         </View>
            </View>
        )
    }
    }
 const styles = StyleSheet.create({
     container:{flex:1,marginTop:20,backgroundColor:'orange'},buton:{width:60,backgroundColor:'yellow',marginTop:300,borderRadius:20,alignItems:'center'}
    
 })
