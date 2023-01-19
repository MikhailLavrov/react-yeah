import c from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className={c.app}>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
