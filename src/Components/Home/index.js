import { Component } from "react";
import Header from "../Header";

import Content from "../Content";

import Footer from "../Footer";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <div className="header-component">
          <Header />
        </div>

        <div className="middle-component">
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
