import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/atoms/Input/Search';

describe('Search component', () => {
  it('renders search element', () => {
    const { getByTestId } = render(<Search />);

    expect(getByTestId('search')).toBeInTheDocument();
  });
  it('displays default placeholder', () => {
    let placeholderText = 'search';
    const { getByPlaceholderText, rerender } = render(<Search />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();

    placeholderText = 'search';

    rerender(<Search placeholder={placeholderText} />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
  it('displays proper value', () => {
    const { getByTestId } = render(<Search />);

    const searchInput = getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'search' } });

    expect(searchInput).toHaveValue('search');
  });
  it('displays proper name', () => {
    const { getByTestId } = render(<Search />);

    const searchInput = getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { name: 'search' } });

    expect(searchInput).toHaveValue('search');
  });
});
