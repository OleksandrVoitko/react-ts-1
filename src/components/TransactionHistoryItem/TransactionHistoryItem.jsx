import {
  TableData,
  TableDataBorder,
  TableRow,
} from './TransactionHistoryItem.styled';

export function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableDataBorder>{amount}</TableDataBorder>
      <TableData>{currency}</TableData>
    </TableRow>
  );
}
