import React from 'react';

const Footer = () => (
  <>
    <footer className="FooterContainer">
      <div className="Section">
        <h4 className="Title">EMAIL SIGN UP</h4>
        <p>Stay up-to-date with the latest deals, new arrivals, and more</p>
        <form className="email-signup">
          <input type="email" placeholder="Enter email address" id="dwfrm_mcsubscribe_email" name="dwfrm_mcsubscribe_email" className="Input" />
          <button type="submit" name="dwfrm_mcsubscribe_subscribeFooter" className="SubmitButton">Sign Up</button>
        </form>
      </div>
      <div className="Section">
        <h4 className="Title">SHOP BY CATEGORY</h4>
        <ul className="LinkList">
          <li className="ListItem">Women</li>
          <li className="ListItem">Men</li>
          <li className="ListItem">Kids</li>
          <li className="ListItem">Footwear</li>
          <li className="ListItem">Gear</li>
          <li className="ListItem">Electronics</li>
          <li className="ListItem">Nutrition</li>
        </ul>
      </div>
      <div className="Section">
        <h4 className="Title">RESOURCES</h4>
        <ul className="LinkList">
          <li className="ListItem">My Account</li>
          <li className="ListItem">Check Order</li>
          <li className="ListItem">Wish List</li>
          <li className="ListItem">Gift Registry</li>
        </ul>
      </div>
      <div className="Section">
        <h4 className="Title">CUSTOMER SERVICE</h4>
        <ul className="LinkList">
          <li className="ListItem">Contact Us</li>
          <li className="ListItem">Help</li>
          <li className="ListItem">Site Map</li>
          <li className="ListItem">Give Feedback</li>
        </ul>
      </div>
      <div className="Section">
        <h4 className="Title">ABOUT</h4>
        <ul className="LinkList">
          <li className="ListItem">About Us</li>
          <li className="ListItem">Careers</li>
          <li className="ListItem">News</li>
          <li className="ListItem">In-Store Experience</li>
        </ul>
      </div>
    </footer>

    <footer className="FooterContainer2">
      © 2024 Todos los derechos reservados.
    </footer>
  </>
);

export default Footer;
