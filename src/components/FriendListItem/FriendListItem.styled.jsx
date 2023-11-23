import styled from 'styled-components';

export const LiItem = styled.li`
  display: flex;
  align-items: center;

  width: 370px;
  padding: 10px;

  background-color: #fff;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const SpanStatus = styled.span`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #aaaaaa;
`;
export const ImgAvatar = styled.img`
  background-color: '#aaaaaa';
  margin-right: 10px;
`;
export const PName = styled.p`
  font-weight: bold;
  font-family: serif;
`;
