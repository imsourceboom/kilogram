import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Wrap = styled.div`
  position: relative;
  height: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 62%;
  padding: 0 0.7rem;
`;

export const Placeholder = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 68px;
  transition: 0.3s;
  color: ${theme.fontLightGray};

  & {
    figcaption {
      font-size: 14px;
      line-height: 1;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: rgba(36, 48, 63, 1);
  border: none;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0);

  &:focus {
    color: lightgray;
    padding-left: 29px;

    & + ${Placeholder} {
      left: 50px;
    }
  }
`;
