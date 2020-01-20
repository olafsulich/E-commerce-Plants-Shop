import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Normal', () => <Button>Click me!</Button>)
  .add('Active', () => <Button active>Click me!</Button>)
  .add('Secondary', () => <Button secondary>Click me!</Button>)
  .add('Remove', () => <Button remove />);
