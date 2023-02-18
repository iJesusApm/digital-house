import React from 'react';

import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';

type Props = {
  handlePress: () => void;
  children: React.ReactNode;
};

const Button = ({handlePress, children}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} testID="button-test">
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    width: '100%',
    borderRadius: 10,
  },
});
export default Button;
