import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import {
  CellBorder,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableTransactionHistory,
} from './TransactionHistory.styled';

export function TransactionHistory({ transactions }) {
  return (
    <TableTransactionHistory>
      <TableHeader>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <CellBorder>Amount</CellBorder>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHeader>

      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </TableTransactionHistory>
  );
}
