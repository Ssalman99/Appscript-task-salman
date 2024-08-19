import { Component } from "react";
import { LuFlower } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import { CiGrid42 } from "react-icons/ci";
import "./index.css";

const langOptions = [
  { id: 1, value: "EN", language: "English" },
  { id: 2, value: "HI", language: "हिंदी" },
  { id: 3, value: "TEL", language: "తెలుగు" },
];

const languageContainer = {
  EN: {
    heading: "DISCOVER OUR PRODUCTS",
    description:
      "Lorem ipsum dolor sit amet. Amet est Posuere rhoncus sclelerisque. Dolor integer scleleriaque nibh amet mi ut elementum dolor.",
  },
  HI: {
    heading: "हमारे उत्पादों की खोज करें",
    description:
      "लोरेम इप्सम डोलर सिट अमेट। Amet est Posuere rhoncus sclelerisque. Dolor integer scleleriaque nibh amet mi ut elementum dolor.",
  },
  TEL: {
    heading: "మా ఉత్పత్తులను కనుగొనండి",
    description:
      "లోరెమ్ ఇప్సమ్ డోలర్ కూర్చుని ఉంటాడు. Amet est Posuere rhoncus sclelerisque. Dolor integer scleleriaque nibh amet mi ut elementum dolor.",
  },
};

const tabsList = [
  { id: 1, value: "SHOP" },
  { id: 2, value: "SKILLS" },
  { id: 3, value: "STORIES" },
  { id: 4, value: "ABOUT" },
  { ID: 5, value: "CONTACT US" },
];

class Header extends Component {
  state = {
    activeTabId: tabsList[0].value,
    activeLanguage: langOptions[0].value,
  };
  onChangeLanguage = (event) => {
    this.setState({ activeLanguage: event.target.value });
  };
  getLanguageData = (activeLanguage) => {
    switch (activeLanguage) {
      case "EN":
        return languageContainer.EN;

      case "HI":
        return languageContainer.HI;

      case "TEL":
        return languageContainer.TEL;

      default:
        return null;
    }
  };

  render() {
    const { activeLanguage } = this.state;

    const { heading, description } = this.getLanguageData(activeLanguage);
    return (
      <div>
        <div className="top-first-container">
          <div className="logo-section logo-hide">
            <CiGrid42 className="logo" />
            <label className="logo-text">Lorem ipsum dolor</label>
          </div>
          <div className="logo-section">
            <CiGrid42 className="logo" />
            <label className="logo-text">Lorem ipsum dolor</label>
          </div>
          <div className="logo-section logo-hide">
            <CiGrid42 className="logo" />
            <label className="logo-text">Lorem ipsum dolor</label>
          </div>
        </div>

        <div className="top-second-container">
          <div className="logo-container">
            <div>
              <LuFlower color="black" className="flower-logo" />
            </div>
            <h1 className="logo-name">LOGO</h1>
            <div className="icons-section">
              <IoSearchOutline className="icons" color="black" />
              <IoIosHeartEmpty className="icons" color="black" />

              <IoBagHandleOutline className="icons" color="black" />
              <VscAccount className="icons logo-hide" color="black" />
              <select
                className="selection-container logo-hide"
                value={activeLanguage}
                onChange={this.onChangeLanguage}
              >
                {langOptions.map((each) => (
                  <option key={each.id} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="tabs-container">
            {tabsList.map((each) => (
              <li key={each.id}>{each.value}</li>
            ))}
          </ul>
        </div>

        <hr />
        <div className="summery-container">
          <h1 className="heading">{heading}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
}

export default Header;
