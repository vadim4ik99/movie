import {category} from '../../../utils/values'

function MenuCategory() {
  return (
    <div className="MenuCategory">
      <ul>
      {category.map((obj) => (
          <li key={obj.id}>
            <a href={'/ganres/' + obj.id}>{obj.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuCategory;