import s from './index.module.css';

const PlaylistCard = ({ track }) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <span className={s.number}>{track.id}</span>
        <div className={s.text_container}>
          <h3 className={s.title}></h3>
          <p className={s.subtitle}></p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
