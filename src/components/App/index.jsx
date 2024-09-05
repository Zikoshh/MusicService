import s from './index.module.css';
import Header from '../Header';
import SideBar from '../SideBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import playlists from '../../playlists';

const App = () => {

  const handlePlayPause = () => {};

  return (
    <div className={s.body}>
      <Header />
      <div className={s.main_container}>
        <SideBar playlists={playlists} />
        <Outlet />
      </div>
      <Footer handlePlayPause={handlePlayPause}/>
    </div>
  );
};

export default App;
