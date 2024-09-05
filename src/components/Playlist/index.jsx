import { useParams } from 'react-router-dom';
import s from './index.module.css';
import { useEffect, useState } from 'react';
import playlists from '../../playlists';

const Playlist = () => {
  const [playlist, setPlaylist] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const foundPlaylist = playlists.find((playlist) => {
      return playlist.id === id;
    });

    console.log(foundPlaylist.tracks[0].audioFile);

    setPlaylist(foundPlaylist);
  }, [id]);

  return (
    <div className={s.playlist}>
      <div className={s.info}>
        <img className={s.info_image} src={playlist.cover} alt='' />
        <div className={s.info_container}>
          <h4 className={s.info_type}>Плейлист</h4>
          <h2 className={s.info_title}>{playlist.title}</h2>
          <p className={s.info_subtitle}>
            {`${playlist.artist} `}
            {'\u00B7'}
            <span className={s.info_counter}>
              {` ${playlist?.tracks?.length}`}
              {''} треков
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
