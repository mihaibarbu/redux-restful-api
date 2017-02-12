import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CategoriesList from './CategoriesList';
import { fetchCategories } from '../../actions/categoriesActions';

class CategoryPage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Categories list</h1>
        <div className="row">
          <Link to="/category/create">
            <button className="btn btn-primary">
              New Category
            </button>
          </Link>
        </div>

        <CategoriesList categories={this.props.categories} />
      </div>
    );
  }
}

CategoryPage.propTypes = {
  categories: React.PropTypes.array.isRequired,
  fetchCategories: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryPage);
