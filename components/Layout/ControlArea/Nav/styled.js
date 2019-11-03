import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  height: 48px;
  /* border: 1px solid yellow; */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Wrap = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & {
    li {
      cursor: pointer;
    }
  }
`;
