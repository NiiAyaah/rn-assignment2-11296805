import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const myName = 'PHILIP ARMAH';

const App = () => {
  return (
    <View style={[styles.container, { backgroundColor: 'gray' }]}>
      <Text style={[styles.textStyle, { fontSize: 24 }]}>
        My name is{' '}
        <Text style={{ fontWeight: 'bold' }}>{myName}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
  },
});


export default App;
