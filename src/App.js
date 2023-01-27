import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';

function App(props) {
  return (
    <div className={c.app}>
      <Header />
      <Navigation sidebar={props.state.sidebar} profile={props.state.profilePage} dialogs={props.state.dialogsPage} />
      <div className={c.app__content}>
        <Routes>
          <Route path="/*" element={ <Profile state={props.state} /> } />
          <Route path="/dialogs/*" element={ <DialogsContainer /> } />
          <Route path="/music" element={<Music/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/settings" element={<Settings/>}/>

          <Route path="/userscontainer" element={<UsersContainer />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
