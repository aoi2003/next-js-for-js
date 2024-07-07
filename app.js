import React, { Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class app extends Component {
  state = { count :0}
  countUp = () => {
  this.setState({
    count: this.state.count + 1 
  });
}

render() {
  return (
    <View style={styles.container}>
      {/* カウントアップボタン */}
      <TouchableOpacity 
        style={styles.button}
        onPress={this.countUp}>
        <Text>ボタン</Text>
      </TouchableOpacity>

      {/* stateのcountを表示 */}
      <Text>
        Count : {this.state.count}
      </Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    color: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  }
});

