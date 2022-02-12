import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import l from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={l.list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          id={item.id}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
