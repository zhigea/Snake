import React, { useState } from 'react';
import styles from './SettingsPage.module.css';
import UserLogo from './logo/logo-user.svg';
import ManLogo from './logo/logo-man.svg';
import WomanLogo from './logo/logo-woman.svg';
import SnakeLogo from './logo/snake-logo.svg';


const SettingsPage = () => {
  const [avatar, setAvatar] = useState({UserLogo});
  const [userName, setUserName] = useState('Player');

  const editClickHandler = () => {
    // Обработчик для кнопки "Редактировать"
  };


  return (
    <div className={styles.page}>
      <h1>Настройки пользователя</h1>
      <form>
        <div className={styles.avatar}>
          <label>Аватар:</label>
          <img 
            src={UserLogo} 
            value='userLogo' 
            alt="user-logo"
            onClick={(e) => setAvatar(e.target)} 
          />
          <img src={ManLogo} value='manLogo' alt="man-logo" />
          <img src={WomanLogo} value='womanLogo' alt="woman-logo" />
          <img src={SnakeLogo} value='snakeLogo' alt="snake-logo" />

        </div>


        <div className={styles.playerName}>
          <label>Имя игрока:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>


        <button onClick={editClickHandler}>Редактировать</button>
      </form>
    </div>
  );
}

export default SettingsPage;
