import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native'

const texteDeBienvenue = "Congratulations!!! here is your first component!!!"
// var user = {
//     name : "Yazid&Inaya&Samra",
//     nom : "Bouti",
//     email : "home@Home.com",
//     adresse : "2 rue des mésanges, 68000 Colmar"
// }
export default class MonComposant extends Component {
    render(){
        return (
            <View> 
                <Text>Bonjour {this.props.prenom} ! </Text>
                <Text>{texteDeBienvenue}</Text>
                <Text>Vous êtes inscrit depuis le : {this.props.dateInscription}</Text>
            </View>
        );
    }
}