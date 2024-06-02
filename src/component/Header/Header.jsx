import React, { useEffect, useState } from "react";
import "./header.css";
import SearchBar from "../Searchbar/Searchbar";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const menuItem = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Detail",
    url: "/detail",
  },
  {
    id: 3,
    title: "List",
    url: "/list",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollThreshold = 50;

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src={logo}
              width="45"
              height="45"
              className="text-dark"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className=""></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menuItem.map((item, index) => {
                return (
                  <li key={index} className="nav-item me-4">
                    <Link
                      to={item.url}
                      className="nav-link active"
                      aria-current="page"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Dropdown <i className="bi bi-chevron-down fs-6 "></i>
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="#" className="dropdown-item">
                      action
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      {" "}
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      {" "}
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
                 <SearchBar />
          </div>
        </div>
      </nav>

          </>
  );
};

export default Header;
