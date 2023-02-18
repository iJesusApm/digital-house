import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../styles/colors';

const Points = ({points = '10,00.00'}) => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.title}>TUS PUNTOS</Text>
      <View style={styles.center}>
        <View style={styles.info}>
          <Text style={styles.monthLabel}>Diciembre</Text>
          <Text style={styles.pointsLabel}>{points} pts</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
    color: COLORS.GRAY,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    backgroundColor: COLORS.PRIMARY,
    marginTop: 20,
    width: 286,
    height: 143,
    borderRadius: 20,
  },
  monthLabel: {
    marginLeft: 18,
    marginTop: 21,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    color: COLORS.WHITE,
  },
  pointsLabel: {
    marginTop: 7,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 43.71,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});

export default Points;
