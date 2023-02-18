import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS_ROUTES} from '../../navigations/constans';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Detail Screen</Text>
      <Button title="Go to HOME" onPress={() => navigation.navigate(SCREENS_ROUTES.HOME)} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Avenir',
  },
});

export default DetailScreen;
