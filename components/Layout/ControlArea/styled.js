import styled from 'styled-components';

export const Wrap = styled.section`
  position: relative;
  min-width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    min-width: 305px;
  }
`;
