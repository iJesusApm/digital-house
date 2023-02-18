import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../Button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Button handlePress={() => {}}>Press me</Button>);
    const button = getByTestId('button-test');
    expect(button).toBeTruthy();
  });

  it('should handles press event correctly', () => {
    const handlePress = jest.fn();
    const {getByTestId} = render(<Button handlePress={handlePress}>Press me</Button>);
    const button = getByTestId('button-test');
    fireEvent.press(button);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
