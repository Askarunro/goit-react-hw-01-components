import PropTypes from 'prop-types';
import p from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img className={p.avatar} src={avatar} alt="User avatar" />
        <p className={p.name}>{username}</p>
        <p className={p.tag}>@{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.item}>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{stats.followers}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{stats.views}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

// const Profile = ({ username, tag, location, avatar, stats }) => {
//     return (
//       <div class="profile">
//         <div class="description">
//           <img src={avatar} alt="User avatar" class="avatar" />
//           <p class="name">{username}</p>
//           <p class="tag">@{tag}</p>
//           <p class="location">{location}</p>
//         </div>

//         <ul class="stats">
//           <li>
//             <span class="label">Followers</span>
//             <span class="quantity">{stats.followers}</span>
//           </li>
//           <li>
//             <span class="label">Views</span>
//             <span class="quantity">{stats.views}</span>
//           </li>
//           <li>
//             <span class="label">Likes</span>
//             <span class="quantity">{stats.likes}</span>
//           </li>
//         </ul>
//       </div>
//     );
//   };
