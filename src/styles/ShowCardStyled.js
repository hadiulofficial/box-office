import styled from 'styled-components';

import { DataCard } from './styled';

export const ShowCardStyled = styled(DataCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #fff;
      &:hover {
        text-decoration-color: blue;
        color: #E50914;
      }
    }
    button {
      outline: none;
      border: 3px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;