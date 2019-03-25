import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Alert, Button, Picker, Slider, Switch } from 'react-native'

export default class userInterfaceMix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "BL",
            buttonColor: "#00A139",
            sliderValue: 5,
            switchIsOn: false
        };
    }

    render() {
        return (
            <View >
                <Button title=" Click Click i'm a button from UserInterfaceMix"
                    color={this.state.buttonColor}
                    onPress={() => {
                        Alert.alert('Congratulations ! you press the button')
                        if (this.state.buttonColor == "#00A139") {
                            this.setState({ buttonColor: "#FF7135" })
                        }
                        else {
                            this.setState({ buttonColor: "#5343A1" })
                        }
                    }} />
                <Picker
                    selectedValue={this.state.country}
                    onValueChange={(itemValue) => this.setState({ country: itemValue })
                    }>
                    <Picker.Item label="Colombie is violent" value="CB" />
                    <Picker.Item label="Brazil is violent" value="BL" />
                    <Picker.Item label="Irak is violent" value="IK" />
                    <Picker.Item label="Europe is violent" value="EU" />
                </Picker>
                <Slider
                    //minimumValue="#00A139"
                    minimumValue={0}
                    //minimumValue="#FF7135"
                    maximumValue={10000}
                    value={this.state.sliderValue}
                    step={1}
                    onValueChange={(itemValue) => {
                        this.setState({ sliderValue: itemValue })
                        if (itemValue > 7500) {
                            this.setState({ switchIsOn: true })
                        } else {
                            this.setState({ switchIsOn: false })
                        }
                    }} />
                < Text style={{ fontSize: 33, textAlign: "center" }}>{this.state.sliderValue}</Text>
                <Switch title="switch ON if more than 7500"
                    value={this.state.switchIsOn}
                    onValueChange={(itemValue) => this.setState({ switchIsOn: itemValue })} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});