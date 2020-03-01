import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Loader from '../components/atoms/Loader/Loader';

describe('Loader component', () => {
  it('renders Loader element', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
