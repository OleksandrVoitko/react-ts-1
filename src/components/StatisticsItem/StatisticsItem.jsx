import { LiItem } from './StatisticsItem.styled';
import color from '../../utils/randomColor';

export function StatisticsItem({ label, percentage }) {
  return (
    <LiItem style={{ backgroundColor: color() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </LiItem>
  );
}
