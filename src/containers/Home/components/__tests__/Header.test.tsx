import React from 'react';
import {render} from '@testing-library/react-native';

import Header from '../Header';

describe('<Header />', () => {
  it('shpuld render correctly', () => {
    const {getByText, container} = render(<Header />);
    expect(getByText('Bienvenido de vuelta!')).toBeDefined();
    expect(getByText('Ruben Rodriguez')).toBeDefined();
    expect(container).toBeDefined();
  });
});
