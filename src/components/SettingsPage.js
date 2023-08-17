import React, { useState } from 'react';

const SettingsPage = () => {
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');

  const editClickHandler = () => {
    // Обработчик для кнопки "Редактировать"
  };

  return (
    <div className="page">
      <h1>Настройки пользователя</h1>
      <form>
        <div>
          <label>Аватар:</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div>
          <label>Имя игрока:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button onClick={editClickHandler}>Редактировать</button>
      </form>
    </div>
  );
}

export default SettingsPage;
