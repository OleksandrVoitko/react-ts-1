import { styled } from 'styled-components';

export const DivStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;

  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
`;

export const H2Title = styled.h2`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  text-transform: uppercase;
`;

export const UlStatList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  border-radius: 0 0 4px 4px;
`;
