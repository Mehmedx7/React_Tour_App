import React, { useEffect, useState } from "react";
import "./header.css";
import SearchBar from "../Searchbar/Searchbar";
import logo from "../../assets/img/logo.png"

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
  const [isOpen, setIsOpen] = useState(false);
  

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

    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} width="45" height="45" className="text-dark" alt="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {/* <span className="navbar-toggler-icon" /> */}
      <i className=""></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {menuItem.map((item, index) => {
                return (
                  <li key={index} className="nav-item me-4">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
       
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown <i className="bi bi-chevron-down fs-6 "></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
       
      </ul>
      {/* <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
      <SearchBar/>
    </div>
  </div>
</nav>

      {/* <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} width="50" height="50" className="text-dark" alt="" />
                     </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menuItem.map((item, index) => {
                return (
                  <li key={index} className="nav-item me-4">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}

              <li className="nav-item dropdown me-4">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Dropdown <i className="bi bi-chevron-down fs-6"></i>
                </a>
                <ul
                  className={`dropdown-menu ${isOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <button type="button" className="btn me-4">
                Book Now
              </button>
            </ul> */}
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

            </form> */}
            {/* <SearchBar />
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
