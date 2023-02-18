import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../../components/atoms/Button';
import {COLORS} from '../../../styles/colors';

type Props = {
  primaryPress: () => void;
  secondaryPress: () => void;
  singlePress: () => void;
  hasMultipleOptions: boolean;
};

const Footer = ({primaryPress, secondaryPress, singlePress, hasMultipleOptions}: Props) => {
  return (
    <View style={styles.wrapper}>
      {hasMultipleOptions ? (
        <>
          <View style={styles.multiple}>
            <Button handlePress={primaryPress}>
              <Text style={styles.multipleLabels}>Ganados</Text>
            </Button>
          </View>
          <View style={styles.multiple}>
            <Button handlePress={secondaryPress}>
              <Text style={styles.multipleLabels}>Canjeados</Text>
            </Button>
          </View>
        </>
      ) : (
        <View style={styles.single}>
          <Button handlePress={singlePress}>
            <Text style={styles.singleLabel}>Todos</Text>
          </Button>
        </View>
      )}
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
  multiple: {
    width: '45%',
    marginHorizontal: 10,
  },
  singleLabel: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    color: COLORS.WHITE,
  },
  multipleLabels: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 12,
    lineHeight: 16.39,
    color: COLORS.WHITE,
  },
});

export default Footer;
