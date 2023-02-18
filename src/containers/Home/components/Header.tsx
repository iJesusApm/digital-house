import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.subtitle}>Ruben Rodriguez</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Avenir',
    fontSize: 20,
    lineHeight: 27.32,
    fontWeight: '800',
  },
  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 21.86,
    fontWeight: '400',
  },
});

export default Header;
