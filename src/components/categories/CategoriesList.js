import React from 'react';

const CategoriesList = ({ categories }) => {
  const emptyMessage = (
    <p>There are no categories yet.</p>
  );
  const categoriesList = (
    <p>categories list</p>
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
