import React from 'react';
import {ActivityIndicator} from 'react-native';
import {render} from '@testing-library/react-native';
import Loader from '../Loader';
import {COLORS} from '../../styles/colors';

describe('Loader component', () => {
  it('renders the loader with the correct color', () => {
    const {getByTestId} = render(<Loader />);
    const loader = getByTestId('loader');
    const activityIndicator = loader.findByType(ActivityIndicator);
    expect(activityIndicator.props.color).toEqual(COLORS.PRIMARY);
  });
});
