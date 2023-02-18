import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Footer from '../Footer';

describe('<Footer />', () => {
  const handlePress = jest.fn();

  it('should render accept button correctly', () => {
    const {getByText} = render(<Footer handlePress={handlePress} />);
    const acceptButton = getByText('Aceptar');
    expect(acceptButton).toBeDefined();
  });

  it('should call handlePress when accept button is pressed', () => {
    const {getByText} = render(<Footer handlePress={handlePress} />);
    const acceptButton = getByText('Aceptar');
    fireEvent.press(acceptButton);
    expect(handlePress).toHaveBeenCalled();
  });
});
