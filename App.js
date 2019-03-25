/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import MonComposant from './Components/MonComposant.js'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerMenu}>
          <Text style={styles.textMenu}>Profile</Text>
        </View>
        <View style={styles.containerProfil}>
          <Image style={styles.containerProfilImage} source={require('./Assets/img/donald.jpg')} />
          <Text style={styles.textProfil}>Donald Duck</Text>
        </View>
        
        <View style={styles.containerInfos}>
          
          <View style={styles.textInfos}>
            <View>
              <Image style={styles.textInfosIcon} source={require('./Assets/icon/outline_email_white_18dp.png')} />
            </View>
            <View>
            <Text style={styles.textInfosChild}>donald.D@disney.com</Text>
            </View>
            
          </View>

          <View style={styles.textInfos}>
            <View>
              <Image style={styles.textInfosIcon} source={require('./Assets/icon/outline_home_white_18dp.png')} />
            </View>
            <View>
              <Text style={styles.textInfosChild}>2000 avenue de Kaboul</Text>
            </View>
          </View>
          
          <View style={styles.textInfos}>
            <View>
              <Image style={styles.textInfosIcon} source={require('./Assets/icon/outline_location_on_white_18dp.png')} />
            </View>
            <View>
              <Text style={styles.textInfosChild}>33333333</Text>
            </View>
          </View>
          
          <View style={styles.textInfos}>
            <View>
              <Image style={styles.textInfosIcon} source={require('./Assets/icon/outline_phone_white_18dp.png')} />
            </View>
            <View>
              <Text style={styles.textInfosChild}>01 23 45 67 89</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330136',
    // alignItems: 'center',
  },
  containerMenu: {
    backgroundColor: '#C9463D',
    height:42,
    justifyContent: 'center',
  },
  textMenu: {
    fontSize: 24,
    color: '#ffffff',
    //textTransform: 'uppercase',
    textAlign: 'center',
    
  },
  containerProfil: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerProfilImage: {
    width:240,
    height:240,
    borderRadius: 120,
    marginTop:20,
  },
  textProfil: {
    textAlign: 'center',
    fontSize: 24,
    color: '#330136',
    fontWeight: 'bold',
    marginTop:5,
    marginBottom: 15,
  },
  containerInfos: {
    padding:30,
    
  },
  textInfos: {
    marginLeft:40,
    marginBottom:40,
    flex: 1,
    flexDirection: 'row'
  },
  textInfosChild: {
    color:'#FFFFFF',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInfosIcon: {
    width:24,
    height:24,
    marginRight:20,
    //backgroundColor:'#ff0000'
  },
});
