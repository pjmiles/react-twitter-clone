import './App.css';
import SideBar from './components/sidebar/SideBar';
import Feed from './components/Feed/Feed';
import Widgets from './components/widgets/Widgets';

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
