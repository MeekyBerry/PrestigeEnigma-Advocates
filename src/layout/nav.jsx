import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { LuPhoneCall } from "react-icons/lu";
import Logo from "../assets/image/Logo-Lawyer.png";

export default function Nav() {
  return (
    <div>
      <NavSmall />
    </div>
  );
}

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "#fff",
    backgroundColor: "#000",
  };
  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : {})}
      {...props}
    />
  );
};

const NavSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="nav-small">
      <figure className="nav-small__logo">
        <img src={Logo} alt="Logo" />
        <figcaption>
          <h1>Joel Catty Law Firm</h1>
          <p>Advocates & Legal Consultants</p>
        </figcaption>
      </figure>
      <nav>
        <button onClick={toggleMenu}>
          {showMenu ? <VscChromeClose /> : <RiMenu4Line />}
        </button>
        <ul className={`nav-small__list ${showMenu ? "show" : ""}`}>
          <li>
            <CustomNavLink to="/" onClick={() => setShowMenu(false)}>
              Home
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/about" onClick={() => setShowMenu(false)}>
              Our firm
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/services" onClick={() => setShowMenu(false)}>
              Practice Areas
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/contact" onClick={() => setShowMenu(false)}>
              Contact
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/faq" onClick={() => setShowMenu(false)}>
              FAQ
            </CustomNavLink>
          </li>
        </ul>
        <div className="nav-small__phone">
          <LuPhoneCall /> Tel:
          <a href="tel:+1(512)333-4999">+1(512)333-4999</a>
        </div>
      </nav>
    </header>
  );
};
