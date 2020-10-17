import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        alt="amazon logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionsLineOne">Hello Guest</span>
          <span className="header__optionsLineTwo">Sign In</span>
        </div>
        <div className="header__options">
          <span className="header__optionsLineOne">Request</span>
          <span className="header__optionsLineTwo">Orders</span>
        </div>
        <div className="header__options">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount"> 0 </span>
        </div>
      </div>
    </div>
  );
}

export default Header;