import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DescriptionWrapper from '../../../components/DescriptionWrapper';
import {COLORS} from '../../../styles/colors';

type Props = {
  date: string;
  points: number;
};

const ProductDetails = ({date, points}: Props) => {
  return (
    <View style={styles.wrapper}>
      <DescriptionWrapper title="Detalles del producto:">
        <Text style={styles.date}>Comprado el {date}</Text>
      </DescriptionWrapper>
      <DescriptionWrapper title="Con esta compra acumulaste:">
        <Text style={styles.points}>{points} puntos</Text>
      </DescriptionWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
  },
  date: {
    marginTop: 19,
    color: COLORS.BLACK,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
  },
  points: {
    marginTop: 32,
    color: COLORS.BLACK,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32.78,
  },
});

export default ProductDetails;
