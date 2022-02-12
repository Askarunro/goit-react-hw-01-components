import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ( {friends} ) => {
  return (
    <ul>
       <FriendListItem avatar={ friends.avatar } 
       name={ friends.name }
       id={ friends.id }
       isOnline={ friends.isOnline }/>
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

