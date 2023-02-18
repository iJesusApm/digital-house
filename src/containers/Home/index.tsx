import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {data} from '../../mocks/data';
import {COLORS} from '../../styles/colors';
import Footer from './components/Footer';
import Header from './components/Header';
import Movements from './molecules/Movements';
import Points from './molecules/Points';

const HomeScreen = () => {
  const [products, setProducts] = useState(data);
  const [hasMultipleOptions, setHasMultipleOptions] = useState(true);

  const redeemedProducts = () => {
    setProducts(data.filter(item => item.is_redemption === true));
    setHasMultipleOptions(false);
  };

  const wonProducts = () => {
    setProducts(data.filter(item => item.is_redemption === false));
    setHasMultipleOptions(false);
  };

  const allProducts = () => {
    setProducts(data);
    setHasMultipleOptions(true);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Header />
        <Points />
        <Movements list={products} />
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
