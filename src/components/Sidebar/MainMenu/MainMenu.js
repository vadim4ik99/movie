
function MainMenu() {
  const obj = {
    'Главная':'/',
    'Фильмы':'/films',
    'Сериалы':'/serials',
    'Телепередачи':'/tvshow',
    'Мультфильмы':'/cartoon',
    'Скоро на сайте':'/soon',
    'Подборки':'/collection',

  }
  return (
    <div className="MainMenu">
      <ul>
        {Object.keys(obj).map(key => (
          <li><a href={obj[key]}>{key}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default MainMenu;