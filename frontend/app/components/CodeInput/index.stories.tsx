import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import withApollo from '../../utils/withApollo';
import withFonts from '../../utils/withFonts';

import CodeInput from '.';

export default {
  title: 'CodeInput',
  decorators: [withKnobs, withApollo, withFonts],
};

export const readyToBeUsed: React.FC = () => (
  <CodeInput total={number('Code length', 4)} error={false} onCodeFull={action('Code to send')} />
);
