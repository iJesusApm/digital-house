import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';
import DescriptionWrapper from '../DescriptionWrapper';

describe('<DescriptionWrapper />', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <DescriptionWrapper title="Title">
        <Text>Content</Text>
      </DescriptionWrapper>,
    );
    expect(getByText('Title')).toBeDefined();
    expect(getByText('Content')).toBeDefined();
  });
});
