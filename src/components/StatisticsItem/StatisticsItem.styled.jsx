import { styled } from 'styled-components';

export const LiItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding-top: 20px;
  padding-bottom: 10px;

  background-color: #aaa;
  color: #fff;

  span {
    padding-bottom: 10px;

    font-size: 18px;
    font-weight: 500;
  }
`;
