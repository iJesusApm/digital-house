import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DescriptionWrapper from '../../../components/DescriptionWrapper';
import {COLORS} from '../../../styles/colors';

type Props = {
  totalPoints: number;
};

const Points = ({totalPoints}: Props) => {
  const formattedNumber = (points: number): string => {
    return points.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <DescriptionWrapper title="TUS PUNTOS">
      <View style={styles.center}>
        <View style={styles.info}>
          <Text style={styles.monthLabel}>Diciembre</Text>
          <Text style={styles.pointsLabel}>{formattedNumber(totalPoints)} pts</Text>
        </View>
      </View>
    </DescriptionWrapper>
  );
};

const styles = StyleSheet.create({
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
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
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
