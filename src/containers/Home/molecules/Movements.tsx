import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Movements = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Movements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Avenir',
  },
});

export default Movements;
