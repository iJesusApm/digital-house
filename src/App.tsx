import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Digital House</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Avenir',
  },
});

export default App;
