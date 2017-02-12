import React from 'react';

import CategoryItem from './CategoryItem';

const CategoriesList = ({ categories }) => {
  const emptyMessage = (
    <p>There are no categories yet.</p>
  );
  const categoriesList = (
    <div className="row col-md-6 col-md-offset-3">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => <CategoryItem category={category} key={category.id} />)}
        </tbody>
      </table>
    </div>
  );
  return (
    <div>
      {categories.length === 0 ? emptyMessage : categoriesList}
    </div>
  );
}

CategoriesList.propTypes = {
  categories: React.PropTypes.array.isRequired
}

export default CategoriesList;
