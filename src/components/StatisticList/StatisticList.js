import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem';
import s from './StatisticList.module.css';

export default function StatisticList({ items, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {items.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}
          >
            <StatisticItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
