import styled from 'styled-components';

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;
export const TableData = styled.td`
  padding: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: capitalize;
  text-align: center;
`;
export const TableDataBorder = styled.td`
  border-left: 1px solid #c7c0c0;
  border-right: 1px solid #c7c0c0;
  text-align: center;
`;
