import PropTypes from 'prop-types';
import i from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const friendStatus = isOnline ? i.stateOnline : i.state;
  return (
    <li className={i.item}>
      <span className={friendStatus}></span>
      <img className={i.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={i.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
