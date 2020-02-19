import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../globalStyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FontsDecorator = (storyFn: () => JSX.Element): JSX.Element => (
  <Wrapper>
    {storyFn()}
    <GlobalStyles />
  </Wrapper>
);

export default FontsDecorator;
