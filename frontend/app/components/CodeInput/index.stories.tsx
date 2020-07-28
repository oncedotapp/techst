import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import withApollo from '../../utils/withApollo';
import withFonts from '../../utils/withFonts';

import CodeInput from '.';
import Form from './styled/form';
import Input from './styled/input';

export default {
  title: 'CodeInput',
  decorators: [withKnobs, withApollo, withFonts],
};

export const toDo: React.FC = () => (
  <CodeInput total={number('Code length', 4)} error={false} onCodeFull={action('Code to send')} />
);

export const input: React.FC = () => <Input />;

export const formWithInputs: React.FC = () => (
  <Form>
    <Input />
    <Input />
  </Form>
);
