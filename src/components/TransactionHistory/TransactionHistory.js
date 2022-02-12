import PropTypes from 'prop-types';
import t from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={t.table}>
        <thead>
          <tr>
            <th className={t.head}>Type</th>
            <th className={t.head}>Amount</th>
            <th className={t.head}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={t.data}>{item.type}</td>
              <td className={t.data}>{item.amount}</td>
              <td className={t.data}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.prototype = {
  item: PropTypes.array,
};
