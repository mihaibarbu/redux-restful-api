import React from 'react';

const CategoryItem = ({ category }) => {
  return (
    <tr>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>
        <a className="btn btn-info btn-xs">
          Edit
        </a>{" "}
        <a className="btn btn-danger btn-xs">
          Delete
        </a>
      </td>
    </tr>
  );
}

CategoryItem.propTypes = {
  game: React.PropTypes.object.isRequired
}

export default CategoryItem;
