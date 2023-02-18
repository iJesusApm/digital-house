import React from 'react';
import {FlatList, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../styles/colors';
import DescriptionWrapper from '../../../components/DescriptionWrapper';
import {TProduct} from '../../../types/product';
import {EMPTY_IMAGE, RIGHT_ARROW} from '../../../assets/resources';
import {dateFormat} from '../../../utils/dateFormat';
import {useNavigation} from '@react-navigation/native';
import {SCREENS_ROUTES} from '../../../navigations/constans';

type ItemProps = {
  product: TProduct;
};

type ListProps = {
  list: Array<TProduct>;
};

const Product = ({product}: ItemProps) => {
  const navigation = useNavigation();

  const defineSymbol = (redemption: boolean): string => {
    return redemption ? '-' : '+';
  };

  const defineSymbolColor = (redemption: boolean): {color: string} => {
    return {color: redemption ? COLORS.NEGATIVE : COLORS.POSITIVE};
  };

  const handlePress = () => {
    navigation.navigate(SCREENS_ROUTES.DETAIL, {product});
  };
  return (
    <TouchableOpacity style={styles.row} onPress={handlePress}>
      <View style={styles.item}>
        <Image
          source={product.image ? {uri: product.image, cache: 'reload'} : EMPTY_IMAGE.imageSource}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textGroup}>
          <Text style={styles.productName}>{product.product}</Text>
          <Text style={styles.productDate}>{dateFormat(product.createdAt)}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.produdctPoints}>
          <Text style={defineSymbolColor(product.is_redemption)}>{defineSymbol(product.is_redemption)}</Text>
          {product.points}
        </Text>
        <Image source={RIGHT_ARROW.imageSource} style={styles.icon} resizeMode="stretch" />
      </View>
    </TouchableOpacity>
  );
};

const Movements = ({list}: ListProps) => {
  return (
    <DescriptionWrapper title="TUS MOVIMIENTOS">
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item}) => <Product product={item} />}
          keyExtractor={item => `${item.id}-${item.createdAt}`}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </DescriptionWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginTop: 20,
    height: 350,
  },
  list: {
    flexGrow: 1,
    paddingTop: 23,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    marginHorizontal: 10,
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGroup: {
    marginLeft: 11,
  },
  productName: {
    color: COLORS.BLACK,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19.12,
  },
  productDate: {
    color: COLORS.BLACK,
    marginTop: 7,
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.39,
  },
  produdctPoints: {
    color: COLORS.BLACK,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 21.86,
    textAlign: 'center',
  },
  image: {width: 55, height: 55, borderRadius: 10},
  icon: {width: 10, height: 10, marginLeft: 29},
});

export default Movements;
