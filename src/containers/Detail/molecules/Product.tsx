import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {EMPTY_DETAIL} from '../../../assets/resources';
import {COLORS} from '../../../styles/colors';

type Props = {
  source: string;
};

const Product = ({source}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={source ? {uri: source, cache: 'reload'} : EMPTY_DETAIL.imageSource}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DETAIL_BACKGROUND,
  },
  image: {width: 200, height: 200},
});

export default Product;