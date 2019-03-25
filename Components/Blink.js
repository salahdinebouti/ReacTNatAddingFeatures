import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };
    
        setInterval( () => (
          this.setState(previousState => (
                    { isShowingText: !previousState.isShowingText }
                ))
            ), 500);
        }
    
      render() {
        if (!this.state.isShowingText) {
          return null;
        }
    
        return (
          <Text>{this.props.text}</Text>
        );
    }
}
