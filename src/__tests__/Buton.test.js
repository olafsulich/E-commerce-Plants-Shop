import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/atoms/Button/Button';

it('test button', () => {
  render(<Button>button</Button>);
});
