import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS_ROUTES} from '../../navigations/constans';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate(SCREENS_ROUTES.DETAIL)} />
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

export default HomeScreen;
