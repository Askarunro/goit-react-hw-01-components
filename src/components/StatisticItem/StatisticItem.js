import PropTypes from 'prop-types';
import s from './StatisticItem.module.css'
const StatisticItem=({label, percentage}) => {
    return (
        <>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}</span>
        </>
    );
}

StatisticItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default StatisticItem