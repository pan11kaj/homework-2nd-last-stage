import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../MyHeader';
export default class AllChat extends Component{
constructor(){
    super();
    this.state={
        email:firebase.auth().currentUser.email
    }
}
joinChat=()=>{


}
    render(){
        return(
            <View style={{backgroundColor:'cyan',flex:1}}>
            <View>
                <MyHeader 
                title="Chat with everyone"/>
            </View>
            
            </View>
        )
    }
}