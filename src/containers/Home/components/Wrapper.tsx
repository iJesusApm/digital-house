import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../styles/colors';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Wrapper = ({title, children}: Props) => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    marginTop: 20,
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    color: COLORS.GRAY,
  },
});

export default Wrapper;
