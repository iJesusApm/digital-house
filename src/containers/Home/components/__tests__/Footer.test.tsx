import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should render single button when hasMultipleOptions is false', () => {
    const mockFn = jest.fn();
    const {getByText} = render(
      <Footer primaryPress={jest.fn()} secondaryPress={jest.fn()} singlePress={mockFn} hasMultipleOptions={false} />,
    );
    const button = getByText('Todos');
    expect(button).toBeDefined();
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should renders multiple buttons when hasMultipleOptions is true', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const {getByText} = render(
      <Footer primaryPress={mockFn1} secondaryPress={mockFn2} singlePress={jest.fn()} hasMultipleOptions={true} />,
    );
    const button1 = getByText('Ganados');
    const button2 = getByText('Canjeados');
    expect(button1).toBeDefined();
    expect(button2).toBeDefined();
    fireEvent.press(button1);
    fireEvent.press(button2);
    expect(mockFn1).toHaveBeenCalled();
    expect(mockFn2).toHaveBeenCalled();
  });
});
