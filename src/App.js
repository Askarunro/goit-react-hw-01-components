import logo from './logo.svg';
import './App.css';
import user from './path/to/user';
import data from './path/to/data';
import friends from './path/to/friends';
import Profile from './components/Profile/Profile';
import StatisticList from './components/StatisticList/StatisticList';
import FriendList from './components/FriendList/FriendList';

console.log(data)
function App() {
    return (
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
            />
            <StatisticList 
            items={data}
            title="Upload stats"
            />
            <FriendList
            friends={friends}
            />
      </div>
    )
}

export default App;
