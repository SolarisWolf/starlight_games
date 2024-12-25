import React from "react";
import "../styles/aat.css";
import { IoSearch } from "react-icons/io5"; // Importing IoSearch icon from react-icons
import { Button } from "@mui/material";
import { FaUserNinja } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => (
  <>
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="t2">
            Celebrate the joy of <b>Christmas</b> with epic discounts on your
            favorite games – the holiday sale starts now
          </p>
        </div>
      </div>
    </div>
    <header>
      <div className="header d-flex align-items-center justify-content-between">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logoWrapper d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo (3).png`}
              alt="StarLight Games Logo"
              className="logo"
            />
            <div className="headerSearch d-flex align-items-center">
              <input
                type="text"
                className="searchInput"
                placeholder="Search for Games..."
              />
              <Button>
                <IoSearch />
              </Button>
            </div>
            <div className="part2">
              <Button className="circle">
                <FaUserNinja />
              </Button>
              <div className="cartItem">
                <span className="spancart">3000RS</span>
                <Button className="circle">
                  <MdOutlineShoppingCart />
                  <span className="count">1</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
