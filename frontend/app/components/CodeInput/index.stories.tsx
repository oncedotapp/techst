import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import withFonts from '../../utils/withFonts';

import CodeInput from '.';

export default {
  title: 'CodeInput',
  decorators: [withKnobs, withFonts],
};

export const readyToBeUsed: React.FC = () => <CodeInput total={number('Code length', 4)} error={false} />;
