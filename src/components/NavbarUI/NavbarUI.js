import Container from 'react-bootstrap/Container';
import './NavbarUI.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Form} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {category, arrYears} from '../../utils/values'
import {listCountry} from '../../utils/listCountry'

function NavbarUI(props) {
  const {pageTitle} = props;
  return (
      <Navbar className='dropdown'>
        <Navbar.Brand href="#home">{pageTitle}</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown
              title="Сортировать"             
            >
              <NavDropdown.Item href="#action/3.1">Новинки</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Год
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Популярные за сутки</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Популярные за неделю</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Популярные за месяц</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Популярные за все время</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Рейтинг пользователей</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Рейтинг IMDb</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              title="Жанр"
              className='dropdown-filter'
            >
              {category.map((cat) => (
                <Form.Check
                  key={cat.id}
                  type="checkbox"
                  label={cat.name}
                  value={cat.id}
                  // Add logic here to handle checkbox changes if needed
                />
              ))}
            </NavDropdown>
            <NavDropdown
              title="Страна"
              className='dropdown-filter'
            >
              {listCountry.map((country) => (
                <Form.Check
                  key={country.iso_3166_1}
                  type="checkbox"
                  label={country.english_name}
                  value={country.iso_3166_1}
                  // Add logic here to handle checkbox changes if needed
                />
              ))}
            </NavDropdown>
            <NavDropdown
              title="Год"
              className='dropdown-filter'
            >
              {arrYears().map((year) => (
                <Form.Check
                  key={year}
                  type="checkbox"
                  label={year}
                  value={year}
                  // Add logic here to handle checkbox changes if needed
                />
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarUI;