import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';
import Heroplant from '../components/atoms/Plant/Plant';

describe('Plant component', () => {
  it('renders Plant element', () => {
    const { getByTestId } = render(<Heroplant />);

    expect(getByTestId('plant')).toBeInTheDocument();
  });
});
