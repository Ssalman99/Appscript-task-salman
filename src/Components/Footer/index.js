import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

import { RiArrowDropDownLine } from "react-icons/ri";
import "./index.css";

const Footer = () => (
  <>
    <div className="footer-bg-container">
      <div className="footer-top-section">
        <div className="search-container">
          <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
          <p className="footer-description">
            Sign Up For Updates From Mettã muse.
          </p>
          <div className="search-coimbain-container">
            <input
              type="search"
              className="search"
              placeholder="Enter Your Email..."
            />
            <button type="button" className="subcription-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <h1 className="footer-heading">CONTACT US</h1>
          <p className="footer-description">
            +44 221 133 5360
            <br />
            customercare@gmail.com
          </p>
          <h1 className="footer-heading">CURRENCY</h1>
          <div className="usd-container">
            <img
              src="https://icon-library.com/images/usa-icon-png/usa-icon-png-18.jpg"
              alt="flag"
              className="usd-img"
            />
            <p className="span-usd">◆ USD</p>
          </div>
          <span>
            Transaction Will bee completed in Euros and a currency reference
            available on a hover.
          </span>
        </div>
      </div>

      <div>
        <hr />
      </div>
      <div className="footer-button-section">
        <div className="meta-section">
          <h1 className="footer-heading">Mettã Muse</h1>
          <p className="footer-description">
            About US
            <br />
            Stories
            <br />
            Artisans
            <br />
            Boutiques
            <br />
            Contact Us
            <br />
            EU Complainces Docs
          </p>
        </div>
        <div>
          <h1 className="footer-heading">QUICK LINKS</h1>
          <p className="footer-description">
            Orders&Shopping
            <br />
            Join/Login as a seller
            <br />
            Payment&Price
            <br />
            Return&Refunds
            <br />
            FAQs
            <br />
            Policy&Privacy
            <br />
            Terms&Conditions
          </p>
        </div>

        <div className="follow-us-section">
          <h1 className="footer-heading">FOLLOW US</h1>
          <IoLogoInstagram />
          <FaLinkedin />
          <h1 className="footer-heading">Mettã Muse ACCEPTED</h1>
          <div className="payments-icons-container">
            <img
              src="https://1.bp.blogspot.com/-2d-dy2j9mfc/XXUjYRLmmoI/AAAAAAAAJVo/3n1Kb9w02pUg4ODGh7IwYmOGKTqQmNPRACLcBGAs/s1600/Google%2BPay%2B%255Bwww.blogovector.com%255D.png"
              alt="gpay"
              className="payment-icons"
            />
            <img
              src="https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
              alt="mastercard"
              className="payment-icons"
            />
            <img
              src="https://th.bing.com/th/id/OIP.ukikeGC8N1pr8iJrC3fXEgAAAA?rs=1&pid=ImgDetMain"
              alt="paypal"
              className="payment-icons"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Amex-512.png"
              alt="amex"
              className="payment-icons"
            />
            <img
              src="https://www.ourcuonline.org/files/ourcu15/1/image/partner-logos/apple-pay-payment-mark.jpg"
              alt="applepay"
              className="payment-icons"
            />
            <img
              src="https://media.premiumtimesng.com/wp-content/files/2023/08/OPay-logo_page-0001-scaled-e1691674483493-1140x792.jpg"
              alt="opay"
              className="payment-icons"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="footer-container-for-mobile">
      <div className="search-container">
        <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
        <p className="footer-description">
          LOrem Ipsum is simply dummy text of the printing and <br />
          typesetting industry.this simply dummy text.
        </p>
        <div className="search-coimbain-container">
          <input
            type="search"
            className="search"
            placeholder="Enter Your Email..."
          />
          <button type="button" className="subcription-button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <h1 className="footer-heading">CALL US</h1>
        <p className="footer-description">
          +44 221 133 5360 ◆ customercare@gmail.com
        </p>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <h1 className="footer-heading">CURRENCY</h1>
        <div className="usd-container">
          <img
            src="https://icon-library.com/images/usa-icon-png/usa-icon-png-18.jpg"
            alt="flag"
            className="usd-img"
          />
          <p className="span-usd">◆ USD</p>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div>
        <div className="drop-container-footer">
          <label className="footer-heading">OCCUSION</label>
          <button className="drop-button-fotter">
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <div className="drop-container-footer">
          <label className="footer-heading">QUICK LINKS</label>
          <button className="drop-button-fotter">
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <div className="drop-container-footer">
          <label className="footer-heading">FOLLOWE US</label>
          <button className="drop-button-fotter">
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>

      <div>
        <hr />
      </div>
      <h1 className="footer-heading">Mettã Muse ACCEPTED</h1>
      <div className="payments-icons-container">
        <img
          src="https://1.bp.blogspot.com/-2d-dy2j9mfc/XXUjYRLmmoI/AAAAAAAAJVo/3n1Kb9w02pUg4ODGh7IwYmOGKTqQmNPRACLcBGAs/s1600/Google%2BPay%2B%255Bwww.blogovector.com%255D.png"
          alt="gpay"
          className="payment-icons"
        />
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
          alt="mastercard"
          className="payment-icons"
        />
        <img
          src="https://th.bing.com/th/id/OIP.ukikeGC8N1pr8iJrC3fXEgAAAA?rs=1&pid=ImgDetMain"
          alt="paypal"
          className="payment-icons"
        />
        <img
          src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Amex-512.png"
          alt="amex"
          className="payment-icons"
        />
        <img
          src="https://www.ourcuonline.org/files/ourcu15/1/image/partner-logos/apple-pay-payment-mark.jpg"
          alt="applepay"
          className="payment-icons"
        />
        <img
          src="https://media.premiumtimesng.com/wp-content/files/2023/08/OPay-logo_page-0001-scaled-e1691674483493-1140x792.jpg"
          alt="opay"
          className="payment-icons"
        />
      </div>
    </div>
  </>
);

export default Footer;
