import Form from 'react-bootstrap/Form';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import MainMenu from './MainMenu/MainMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import './Sidebar.css';
import React, { useState , useEffect } from 'react';
import MovieServices from '../../services/movies'
import { getYear } from '../../utils/utilsForPage'

function Sidebar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchValue.length > 3) {
      const timerId = setTimeout(() => {
        fetchSearchResults();
      }, 500); // Добавляем задержку в 500 миллисекунд

      return () => {
        clearTimeout(timerId); // Очищаем таймер при изменении значения поискового запроса
      };
    } else {
      setSearchResult([]); // Очищаем результаты поиска, если поисковой запрос слишком короткий
    }
  }, [searchValue]);

  const fetchSearchResults = async () => {
    try {
      const results = await MovieServices.searchByTitle(searchValue);
      setSearchResult(results.results);
      setShowResults(true); // Показываем результаты поиска
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setShowResults(false); // Скрываем результаты при изменении поискового запроса
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar_logo">
        <a href="#"></a>
      </div>
      <Form className='Sidebar_form'>
        <Form.Control 
          className='Sidebar_search inpt' 
          type="text" 
          placeholder="Поиск"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </a>
        
      </Form>
      {showResults && (
        <div className="SearchResults">
          <ul>
            {searchResult.map((result) => (
              <li key={result.id}>
                <a href={`/films/${result.id}`}>{result.title} {getYear(result.release_date)} </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ProfileMenu/>
      <hr/>
      <MainMenu/>
      <hr/>
      <MenuCategory/>

    </div>
  );
}

export default Sidebar;