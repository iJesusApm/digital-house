import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Loader from '../../components/Loader';
import {getProducts} from '../../services/getProducts';
import {COLORS} from '../../styles/colors';
import {TProduct} from '../../types/product';
import Footer from './components/Footer';
import Header from './components/Header';
import Movements from './molecules/Movements';
import Points from './molecules/Points';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [hasMultipleOptions, setHasMultipleOptions] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setList(data);
      setIsFetching(false);
    });
  }, []);

  const redeemedProducts = () => {
    setList(products.filter((item: TProduct) => item.is_redemption === true));
    setHasMultipleOptions(false);
  };

  const wonProducts = () => {
    setList(products.filter((item: TProduct) => item.is_redemption === false));
    setHasMultipleOptions(false);
  };

  const allProducts = () => {
    setList(products);
    setHasMultipleOptions(true);
  };

  const calculateTotalPoints = products.reduce((accumulator: number, item: TProduct) => {
    if (!item.is_redemption) {
      accumulator += item.points;
    }
    return accumulator;
  }, 0);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />

      <View style={styles.container}>
        <Header />
        <Points totalPoints={calculateTotalPoints} />
        <Movements list={list} />
        <Footer
          primaryPress={wonProducts}
          secondaryPress={redeemedProducts}
          singlePress={allProducts}
          hasMultipleOptions={hasMultipleOptions}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE_BACKGROUND,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
