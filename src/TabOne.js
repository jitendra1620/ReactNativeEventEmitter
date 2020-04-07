import React, {Component} from 'react';
import {View, Text, DeviceEventEmitter, TouchableOpacity} from 'react-native';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
  }
  render() {
    return (
      <View>
        <Text style={{width: '100%', color: 'blue', textAlign: 'center'}}>
          {' '}
          TabOne{' '}
        </Text>
        <TouchableOpacity
            onPress={() => {
              console.log('bbasdfsadfsadfsadfsadf')
              const dict = {'ok':'52'}
              DeviceEventEmitter.emit('dashboardEmitter', [dict]);
            }}>
            <Text>Button 1</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default TabOne;
