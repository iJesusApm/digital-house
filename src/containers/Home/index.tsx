import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../../styles/colors';
import Footer from './components/Footer';
// import {useNavigation} from '@react-navigation/native';
import Header from './components/Header';
import Movements from './molecules/Movements';
import Points from './molecules/Points';

const HomeScreen = () => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Header />
        <Points />
        <Movements />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE_BACKGROUND,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontFamily: 'Avenir',
  },
});

export default HomeScreen;
