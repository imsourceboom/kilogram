import styled from 'styled-components';

export const Wrap = styled.ul`
  li {
    display: flex;
    min-height: 70px;
    max-height: 70px;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media (min-width: 768px) and (min-height: 450px) {
      max-width: 301px;
    }

    figure {
      min-width: 70px;
      max-width: 70px;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        border-radius: 50%;
      }
    }

    article {
      flex: 1;
      padding: 0.4rem 0.6rem 0.4rem 0;

      hgroup {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
          flex: 1;
          font-family: 'Noto Sans', sans-serif;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          @media (min-width: 768px) and (min-height: 450px) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        time {
          min-width: 60px;
          max-width: 60px;
          font-size: 12px;
          text-align: right;
          color: rgba(255, 255, 255, 0.65);
        }
      }
    }
  }
`;
