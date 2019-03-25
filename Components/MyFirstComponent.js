import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native'

const titrePage = "Bienvenue sur ma page special test"

export default class MyFirstComponent extends Component{
    render(){
        return(
            <View style={styles.containerProfilImage}>
                <Text> hello {this.props.pseudo}</Text>
                <Text > your favorite color is the {this.props.favoriteColor}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerProfilImage: {
        width:240,
        height:240,
        borderRadius: 120,
        marginTop:20,
      },
    });    