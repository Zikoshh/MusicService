import { NavLink } from 'react-router-dom';
import s from './index.module.css';

const SideBarCard = ({ id, cover, title, tracksLength }) => {
  return (
    <div className={s.card}>
      <NavLink className={s.link} to={`/playlists/${id}`}>
        <img className={s.cover} src={cover} />
        <div className={s.info}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.subtitle}>
            Плейлист {'\u00B7'}{' '}
            <span className={s.counter}>{tracksLength}</span>
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBarCard;
