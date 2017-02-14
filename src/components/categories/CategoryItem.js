import React from 'react';
import { Link } from 'react-router';

const CategoryItem = ({ category }) => {
  return (
    <tr>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>
        <Link to={`/category/${category.id}`} className="btn btn-info btn-xs">
          Edit
        </Link>{" "}
        <a className="btn btn-danger btn-xs">
          Delete
        </a>
      </td>
    </tr>
  );
}

CategoryItem.propTypes = {
  category: React.PropTypes.object.isRequired
}

export default CategoryItem;
