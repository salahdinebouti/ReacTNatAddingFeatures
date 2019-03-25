import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native'
import MonComposant from './Components/MonComposant'
import MyFirstComponent from './Components/MyFirstComponent'
import Blink from './Components/Blink'
import UserInterfaceMix from './UserInterfaceMix';

export default class TestApp extends Component {
    render(){
        return (
        <View>
          <MonComposant prenom ="Albert Einstein" dateInscription="25/03/2018"/>
          <MyFirstComponent pseudo = "Valala" favoriteColor = "BloodyRed"/>
          {/* <Blink text='I love to blink' /> */}
          <UserInterfaceMix />
        </View>
        );
    }
}

  
