import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SavedMainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SavedMainScreen</Text>
      </View>
    );
  }
}

export default SavedMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
