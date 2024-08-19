import { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./index.css";

const Slidebar = (props) => {
  const { showFilter, selectingCategory } = props;

  const [optionClicked, setOption] = useState(false);
  const [menCG, setMen] = useState(true);
  const [womenCG, setWomen] = useState(true);
  const [kidsCG, setKids] = useState(true);

  const selectIConsChange = () => {
    setOption((prevState) => !prevState);
  };

  const checkedInMen = (event) => {
    setMen((prevState) => !prevState);
    selectingCategory({ men: menCG });
  };

  const checkedInWomen = (event) => {
    setWomen((prevState) => !prevState);
    selectingCategory({ women: womenCG });
  };
  const checkedInKids = (event) => {
    setKids((prevState) => !prevState);
    selectingCategory({ kids: kidsCG });
  };

  const classnaming = optionClicked && "selecting-items-container-hide";
  const dropIcons = optionClicked ? (
    <RiArrowDropDownLine className="drop-down-icon" />
  ) : (
    <RiArrowDropUpLine className="drop-down-icon" />
  );

  const showClass = showFilter ? "slider-container" : "sd-container";
  return (
    <div className={showClass}>
      <div>
        <input type="checkbox" className="input" id="customizble" />
        <label className="input-label" htmlFor="customizble">
          CUSTOMIZBLE
        </label>
      </div>
      <hr />

      <div>
        <div className="drop-container">
          <label className="label">IDEAL FOR</label>
          <button className="drop-button" onClick={selectIConsChange}>
            {dropIcons}
          </button>
        </div>
        <span className="span">ALL</span>
        <div className={`selecting-items-container ${classnaming}`}>
          <div className="men-container">
            <input
              type="checkbox"
              className="input"
              id="men"
              onChange={checkedInMen}
              value="men"
            />
            <label className="input-label" htmlFor="men">
              MEN
            </label>
          </div>
          <div className="men-container">
            <input
              type="checkbox"
              className="input"
              id="women"
              onChange={checkedInWomen}
              value="women"
            />
            <label className="input-label" htmlFor="women">
              WOMEN
            </label>
          </div>
          <div className="men-container">
            <input
              type="checkbox"
              className="input"
              id="kids"
              onChange={checkedInKids}
            />
            <label className="input-label" htmlFor="kids">
              BABY&KIDS
            </label>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <div className="drop-container">
          <label className="label">OCCUSION</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>

      <hr />

      <div>
        <div className="drop-container">
          <label className="label">FABRIC</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>

      <hr />
      <div>
        <div className="drop-container">
          <label className="label">SEGMENT</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>

      <hr />
      <div>
        <div className="drop-container">
          <label className="label">SUITABLE FOR</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>
      <hr />
      <div>
        <div className="drop-container">
          <label className="label">RAW METTERIAL</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>
      <hr />
      <div>
        <div className="drop-container">
          <label className="label">PATTERN</label>
          <button className="drop-button">
            <RiArrowDropDownLine className="drop-down-icon" />
          </button>
        </div>
        <span className="span">ALL</span>
      </div>
      <hr />
    </div>
  );
};

export default Slidebar;
