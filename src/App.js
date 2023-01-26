import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className={c.app}>
      <Header />
      <Navigation sidebar={props.state.sidebar} profile={props.state.profilePage} dialogs={props.state.dialogsPage} />
      <div className={c.app__content}>
        <Routes>
          <Route path="/*" element={ <Profile store={props.store} /> } />
          <Route path="/dialogs/*" element={ <DialogsContainer store={props.store} /> } />
          <Route path="/music" element={<Music/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
