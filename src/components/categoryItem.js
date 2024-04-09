import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setFilter } from "../redux/actions/catalogActions";

const CategoryItem = ({ item, category, onSelected }) => {
  console.log(category);
  //  const { id, category, img, name } = data;

  return (
    <div className="category">
      {/* <img className="category-img" src={img} alt={item.category} /> */}

      <div className="details">
        <Link to={`/product/${item.category}`} className="cartitem_name">
          <h2>{item.category}</h2>
          <h6>{item.name}</h6>
        </Link>
        <div className="categories">
          {CategoryItem &&
            CategoryItem.map(({ id, label }) => (
              <div className="category" key={id}>
                {label.toUpperCase()}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
CategoryItem.defaultProps = {
  data: {},
  onSelected: () => {},
};
CategoryItem.propTypes = {
  data: PropTypes.object.isRequired,
  onSelected: PropTypes.func,
};
export default CategoryItem;
