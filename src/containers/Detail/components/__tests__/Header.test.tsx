import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Header text="Test Header" />);
    const headerText = getByText('Test Header');
    expect(headerText).toBeDefined();
  });
});
