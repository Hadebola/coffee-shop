import React, { useState } from "react"
import { Link } from "gatsby"
import logo3 from "../../images/logo3.svg"
import { FaCartArrowDown } from "react-icons/fa"

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    { id: 1, path: "/", text: "home" },
    { id: 2, path: "/about", text: "about" },
  ])
  const navbarHandler = () => {
    navbarOpen
      ? setNavbarOpen(!navbarOpen, setCss("collapse navbar-collapse"))
      : setNavbarOpen(!navbarOpen, setCss("collapse navbar-collapse show"))
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo3} alt="coffee logo" />
      </Link>
      <button
        type="button"
        className="navbar-toggler button"
        onClick={navbarHandler}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li key={link.id} className="nav-item lists">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
