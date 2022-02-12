import PropTypes from 'prop-types';


export default function FriendListItem({avatar , name, isOnline, id}) {
  return (
    
        <li key={id}>
          <span>{isOnline}</span>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </li>
   
  )

 
}

FriendListItem.propTypes = {
    friends: PropTypes.array,
  };
  

// avatar,name,isOnline,id


// {friends.map(friend => (
//     <li key={friend.id}>
//       <span>{friend.isOnline}</span>
//       <img src={friend.avatar} alt="User avatar" width="48" />
//       <p>{friend.name}</p>
//     </li>
//   ))}