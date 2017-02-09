import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoriesList from './CategoriesList';
import { fetchCategories } from '../../actions/categoriesActions';

class CategoryPage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <h1>Categories list</h1>

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
