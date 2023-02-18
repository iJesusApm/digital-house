import React from 'react';
import {render} from '@testing-library/react-native';
import Product from '../Product';

describe('<Product />', () => {
  it('should render correctly with a valid source', () => {
    const source = 'https://loremflickr.com/640/480/transport';
    const {getByTestId} = render(<Product source={source} />);
    const image = getByTestId('product-image-test');
    expect(image.props.source.uri).toBe(source);
  });
});
