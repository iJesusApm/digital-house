import React from 'react';
import {render} from '@testing-library/react-native';
import ProductDetails from '../ProductDetails';

describe('<ProductDetails />', () => {
  it('should render the date and points correctly', () => {
    const date = '11 de febrero, 2022';
    const points = 10;

    const {getByText} = render(<ProductDetails date={date} points={points} />);

    expect(getByText(`Comprado el ${date}`)).toBeTruthy();
    expect(getByText(`${points} puntos`)).toBeTruthy();
  });
});
