import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../../components/atoms/Button';
import {COLORS} from '../../../styles/colors';

type Props = {
  handlePress: () => void;
};

const Footer = ({handlePress}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.single}>
        <Button handlePress={handlePress}>
          <Text style={styles.singleLabel}>Aceptar</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  single: {
    width: '90%',
    marginHorizontal: 10,
  },
  singleLabel: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    color: COLORS.WHITE,
  },
});

export default Footer;
