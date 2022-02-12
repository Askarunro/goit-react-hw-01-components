import logo from './logo.svg';
import './App.css';
import user from './path/to/user';
import data from './path/to/data';
import friends from './path/to/friends';
import transactions from './path/to/transactions';
import Profile from './components/Profile/Profile';
import StatisticList from './components/StatisticList/StatisticList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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
      <StatisticList items={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
