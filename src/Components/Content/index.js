import { Component } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Slidebar from "../Slidebar";
import Products from "../Products";
import "./index.css";

const sortbyOptions = [
  {
    optionId: "RECOMENDED",
    displayText: "",
  },
  {
    optionId: "NEWEST_FIRST",
    displayText: "?limit=5",
  },
  {
    optionId: "POPULAR",
    displayText: "/category/jewelery",
  },
  {
    optionId: "PRICE_HIGH",
    displayText: "?sort=desc",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "/",
  },
];

class Content extends Component {
  state = {
    showFilter: true,
    sortOption: sortbyOptions[0].displayText,
    productsList: [],
    isLoader: true,
  };

  getProductDetails = async () => {
    const { sortOption } = this.state;
    this.setState({ isLoader: true });
    const url = `https://fakestoreapi.com/products${sortOption}`;
    const option = {
      method: "GET",
    };
    const response = await fetch(url, option);

    if (response.ok === true) {
      const fetchedData = await response.json();

      const productList = fetchedData.map((each) => ({
        id: each.id,
        image: each.image,
        title: each.title,
        isFavorite: false,
        category: each.category,
      }));

      this.setState({ productsList: productList, isLoader: false });
    }
  };

  componentDidMount() {
    this.getProductDetails();
  }

  onClickshowButton = () => {
    this.setState((prevstate) => ({
      showFilter: !prevstate.showFilter,
    }));
  };

  changeOPtions = (event) => {
    this.setState({ sortOption: event.target.value });
    this.getProductDetails();
  };

  selectingCategory = (event) => {
    if (event.women === true) {
      this.setState((prevstate) => ({
        productsList: prevstate.productsList.filter((each) => {
          if (each.category === "women's clothing") {
            return each;
          }
          return null;
        }),
      }));
    } else if (event.men === true) {
      this.setState((prevstate) => ({
        productsList: prevstate.productsList.filter((each) => {
          if (each.category === "men's clothing") {
            return each;
          }
          return null;
        }),
      }));
    } else if (event.kids === true) {
      this.setState((prevstate) => ({
        productsList: prevstate.productsList.filter((each) => {
          if (each.category === "jewelery") {
            return each;
          }
          return null;
        }),
      }));
    } else {
      this.getProductDetails();
    }
  };

  changeFav = (id) => {
    this.setState((prevstate) => ({
      productsList: prevstate.productsList.map((each) => {
        if (id === each.id) {
          return { ...each, isFavorite: !each.isFavorite };
        }
        return each;
      }),
    }));
  };

  render() {
    const { sortOption, showFilter, productsList, isLoader } = this.state;

    const filterElement = showFilter ? "HIDEFILTER" : "SHOWFILTER";
    const icon = showFilter ? <FaAngleLeft /> : <FaAngleRight />;
    return (
      <div className="md-container">
        <div className="for-large-device-container">
          <hr />
          <div className="middle-bg-container">
            <div className="filter-container">
              <p className="total-Items">3425 ITEMS</p>
              <button className="icon-button" onClick={this.onClickshowButton}>
                {icon}
                {filterElement}
              </button>
            </div>

            <div>
              <select
                value={sortOption}
                onChange={this.changeOPtions}
                className="recomended-container"
              >
                {sortbyOptions.map((each) => (
                  <option
                    key={each.optionId}
                    value={each.displayText}
                    className="selct-options"
                  >
                    {each.optionId}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <hr className="horizontal-line" />
          <div className="for-small-device-contaienr">
            <div className="icon-button">Fileter</div>
            <div className="vertical-line"></div>
            <div>
              <select
                value={sortOption}
                onChange={this.changeOPtions}
                className="recomended-container"
              >
                {sortbyOptions.map((each) => (
                  <option
                    key={each.optionId}
                    value={each.displayText}
                    className="selct-options"
                  >
                    {each.optionId}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr className="horizontal-line" />
        </div>
        <div className="coimbaining-slider-product-container">
          <Slidebar
            showFilter={showFilter}
            selectingCategory={this.selectingCategory}
          />
          <div className="products-container">
            <ul className="products-order-container">
              {productsList.map((each) => (
                <Products
                  key={each.id}
                  products={each}
                  changeFav={this.changeFav}
                  isLoader={isLoader}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
