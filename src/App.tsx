import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text>Digital House</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default App;
