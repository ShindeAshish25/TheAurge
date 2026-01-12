import { Link, NavLink } from "react-router-dom";
import imglogo from "../assets/img/logo.png"


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="logo-div">
          <Link className="navbar-brand" to="/">
            <img src={imglogo} alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team">
                TEAM
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
