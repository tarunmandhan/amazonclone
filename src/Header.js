import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/d/amazon_PNG11.png"
            alt="oops img error"
          />
        </Link>

        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 Links  */}
        <div className="header__nav">
          {/* 1st Link  */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Tarun</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>

          {/* 2nd Link  */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns </span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd Link  */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* 4th Link  */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* Shopping Basket icon */}
              <ShoppingBasketIcon />
              {/* Number of items in the basket  */}
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
