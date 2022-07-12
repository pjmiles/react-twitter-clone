import './App.css';
import SideBar from './components/sidebar/SideBar';
import Feed from './components/Feed/Feed';
import Widgets from './components/widgets/Widgets';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';

function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
