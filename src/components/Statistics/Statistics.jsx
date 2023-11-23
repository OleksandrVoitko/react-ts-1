import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { DivStatistics, H2Title, UlStatList } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <DivStatistics>
      {title && <H2Title>{title}</H2Title>}
      <UlStatList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </UlStatList>
    </DivStatistics>
  );
}
