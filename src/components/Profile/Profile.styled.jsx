import { styled } from 'styled-components';

export const DivProfile = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 400px;

  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
  padding-bottom: 50px;

  p {
    margin-bottom: 0px;
  }
`;

export const ImgAvatar = styled.img`
  width: 150px;
  border-radius: 50%;

  background-color: #d3dfe5;
`;

export const PName = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #232222;
`;

export const PTag = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #9e9a9a;
`;

export const PLocation = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #9e9a9a;
`;

export const UlStats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #dfe3e5;

  border-radius: 0 0 4px 4px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const SpanLable = styled.span`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
  color: #9e9a9a;
`;

export const SpanQuantity = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #232222;
`;
