import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Atoms/Text', module)
  .add('Normal', () => <Text main>Simple text...</Text>)
  .add('Logo', () => <Text logo>Simple text...</Text>)
  .add('Error', () => <Text errorMessage>Simple text...</Text>);
