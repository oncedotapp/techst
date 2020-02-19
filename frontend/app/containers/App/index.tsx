import React from 'react';
import styled from 'styled-components';

import GlobalStyles from '../../globalStyles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App: React.FC = () => (
  <AppWrapper>
    <div>Coucou2</div>
    <GlobalStyles />
  </AppWrapper>
);

export default App;
