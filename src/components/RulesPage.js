import React from 'react';
import img1 from './img/img-snake1.jpg'
import img2 from './img/img-snake2.jpg'
import styles from './RulesPage.module.css'

const RulesPage = () => {
  return (
    <div className={styles.page}>
      <h1>Правила игры</h1>
      <div className={styles.topic}>
        <p>
          Игрок управляет длинным, тонким существом, напоминающим змею, которое ползает по плоскости игрового поля, собирая еду (или другие предметы), избегая столкновения с собственным хвостом и краями игрового поля (существуют варианты, где при прохождении через край змея выходит из противоположного края поля). 
        </p>
        <img className={styles.img1} src={img1} alt='img-snake1' />
      </div>
      <div className={styles.topic}>
        <img className={styles.img2} src={img2} alt='img-snake2' /> 
        <p>
          Каждый раз, когда змея съедает кусок пищи, она становится длиннее, что постепенно усложняет игру и увеличивает количество очков рейтинга. Количество получаемых очков зависит также от скорости выбранной игроком в начале игры.
        </p>
      </div>
    </div>
  );
}
export default RulesPage;
