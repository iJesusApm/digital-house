import React from 'react';
import {render} from '@testing-library/react-native';
import Points from '../Points';

describe('<Points />', () => {
  it('should display the total points with two decimal places', () => {
    const totalPoints = 1234.56;
    const {getByText} = render(<Points totalPoints={totalPoints} />);
    const pointsLabel = getByText('1.234,56 pts');
    expect(pointsLabel).toBeDefined();
  });
});
