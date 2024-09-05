import s from './index.module.css';
import SideBarCard from '../SideBarCard';

const SideBar = ({ playlists }) => {
  return (
    <div className={s.sidebar}>
      {playlists.map((playlist) => {
        return (
          <SideBarCard
            key={playlist.id}
            id={playlist.id}
            cover={playlist.cover}
            title={playlist.title}
            tracksLength={playlist.tracks.length}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
