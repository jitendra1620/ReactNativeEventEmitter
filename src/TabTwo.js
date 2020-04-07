import React, { Component } from 'react';
import { View, Text, TouchableOpacity , DeviceEventEmitter} from 'react-native';

class TabTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty:0
    };
  }
  componentDidMount() {
    
    DeviceEventEmitter.addListener('dashboardEmitter', (e) => {
      console.log('eeeeeeeeeeeee' , e)
      // this.setState({ qty: this.state.qty + e })
    })
  }
  render() {
    return (
      <View>
        <Text style={{width:'100%', color:'red', textAlign:'center'}}> {this.state.qty} </Text>
      </View>
    );
  }
}

export default TabTwo;
