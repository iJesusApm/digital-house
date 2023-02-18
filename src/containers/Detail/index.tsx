import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Platform} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import {SCREENS_ROUTES} from '../../navigations/constans';
import {TProduct} from '../../types/product';
import {COLORS} from '../../styles/colors';
import Header from './components/Header';
import Product from './molecules/Product';
import ProductDetails from './molecules/ProductDetails';
import {dateFormat} from '../../utils/dateFormat';
import Footer from './components/Footer';

type ParamList = {
  Home: {product: TProduct};
};

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Home'>>();
  const {product} = route.params;

  const handlePress = () => {
    navigation.navigate(SCREENS_ROUTES.HOME);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        backgroundColor={Platform.OS === 'ios' ? 'transparent' : COLORS.DETAIL_BACKGROUND}
        barStyle="dark-content"
        animated
      />
      <Header text={product.product} />
      <View style={styles.bodyWrapper}>
        <View style={styles.container}>
          <Product source={product.image} />
          <ProductDetails date={dateFormat(product.createdAt)} points={product.points} />
          <Footer handlePress={handlePress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.DETAIL_BACKGROUND,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  bodyWrapper: {backgroundColor: COLORS.WHITE, paddingBottom: 40},
});

export default DetailScreen;
