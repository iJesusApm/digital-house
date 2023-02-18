import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../styles/colors';

type Props = {
  text: string;
};

const Header = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: COLORS.DETAIL_BACKGROUND,
    justifyContent: 'flex-end',
  },
  title: {
    marginLeft: 20,
    marginBottom: 24,
    color: COLORS.BLACK,
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '800',
  },
});

export default Header;
