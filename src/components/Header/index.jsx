import { useState } from 'react';
import Input from '../Input';
import s from './index.module.css';
import SearchIcon from './assets/search.svg?react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');

  return (
    <div className={s.header}>
      <NavLink to='/'>
        <button className={s.button_home} />
      </NavLink>
      <Input
        value={query}
        setValue={setQuery}
        placeholder={'Что хочешь включить?'}
        StartIcon={SearchIcon}
      />
    </div>
  );
};

export default Header;
