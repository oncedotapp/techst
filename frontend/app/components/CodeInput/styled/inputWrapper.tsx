import styled from 'styled-components';

export default styled.div`
  :not(:last-child) {
    margin-right: 16px;
  }
  :last-child {
    margin-left: 16px;
  }
  :first-child {
    margin-left: 0;
  }
`;
