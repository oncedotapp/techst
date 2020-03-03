import React from 'react';
import { mount } from 'enzyme';

import CodeInput from '.';
import Form from './styled/form';
import Input from './styled/input';

const noop = (): void => {};

describe('CodeInput', () => {
  it('renders a Form', () => {
    const component = mount(<CodeInput total={6} onCodeFull={noop} />);

    expect(component.is(Form));
    component.unmount();
  });

  it('renders the correct number of Input boxes', () => {
    const total = 6;
    const component = mount(<CodeInput total={total} onCodeFull={noop} />);

    expect(component.find(Input)).toHaveLength(total);
    component.unmount();
  });
});
