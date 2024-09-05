import { useRef } from 'react';
import s from './index.module.css';

// eslint-disable-next-line react/prop-types
const Input = ({ value, setValue, placeholder, StartIcon, EndIcon }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={s.input_container}>
      <div
        className={`${s.input_icon} ${s.input_icon_start}`}
        onClick={handleIconClick}
      >
        {StartIcon && <StartIcon />}
      </div>

      <input
        ref={inputRef}
        style={{
          paddingLeft: `${StartIcon ? '48px' : '12px'}`,
          paddingRight: `${EndIcon ? '48px' : '12px'}`,
        }}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={s.input}
      />
      <div
        className={`${s.input_icon} ${s.input_icon_end}`}
        onClick={handleIconClick}
      >
        {EndIcon && <EndIcon />}
      </div>
    </div>
  );
};

export default Input;
