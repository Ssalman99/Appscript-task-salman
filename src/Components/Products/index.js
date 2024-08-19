import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./index.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Products = (props) => {
  const { products, changeFav, isLoader } = props;
  const { id, title, image, isFavorite } = products;
  let loading = true;
  let color = "#ffffff";

  const buttonClicked = () => {
    changeFav(id);
  };

  const heart = isFavorite ? (
    <FaHeart className="heart-icon" />
  ) : (
    <FaRegHeart />
  );
  const renderProductsLists = () => {
    return (
      <li className="card-container" key={id}>
        <img src={image} className="cart-image" alt={`item${id}`} />
        <div className="coimbaining-card-container">
          <div className="heading-descriptoin-container">
            <h1 className="card-heading">{title}</h1>
            <p className="card-description">
              <a href="_blank">Sign in</a> Create an account to see pricing
            </p>
          </div>
          <div>
            <button
              type="button"
              className="fav-button"
              onClick={buttonClicked}
            >
              {heart}
            </button>
          </div>
        </div>
      </li>
    );
  };

  const renderLoader = () => {
    return (
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  };

  return isLoader ? renderLoader() : renderProductsLists();
};

export default Products;
