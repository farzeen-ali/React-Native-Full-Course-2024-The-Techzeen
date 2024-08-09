/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SecondClass extends Component {
    constructor(){
        super();
        this.state = {
            myName : 'Farzeen',
        };
    }
    updateName = () => {
        this.setState({myName: 'Ali'});
    };
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Name: {this.state.myName} Age: {this.props.data} </Text>
        <Button title="Update Name" onPress={this.updateName} />
      </View>
    );
  }
}

export default SecondClass;
