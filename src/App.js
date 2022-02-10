import logo from './logo.svg';
import './App.css';
import user from './path/to/user';
import Profile from './components/Profile/Profile';



function App() {
    return <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />;
}

export default App;
