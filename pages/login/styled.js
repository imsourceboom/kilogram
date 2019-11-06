import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(26, 34, 44, 1);
`;

export const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translate(-50%, 0);
`;

export const Wrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 2rem;

  @media (min-width: 450px) {
    width: 450px;
  }

  input[type='text'] {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0);
    background-color: rgba(36, 48, 63, 1);
    text-align: center;

    &:focus {
      color: lightgray;
    }
  }

  .button {
    margin-top: 0.8rem;
    background-color: ${theme.teleDefaultColor};
    height: 35px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
