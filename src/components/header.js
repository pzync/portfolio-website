import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header>
    <div className="HeaderGroup">
      <div className="HeaderSiteTitleContainer">
        <h1>
          <Link to="/" className="HeaderSiteTitle">
            Shekhar Gurav
          </Link>
        </h1>
      </div>
      <nav className="HeaderSiteNav">
        <Link to="/about" className="HeaderNavLink">
          About
        </Link>
        <Link to="/work" className="HeaderNavLink">
          Work
        </Link>
        <Link to="/about#writing" className="HeaderNavLink">
          Writing
        </Link>
        <Link to="/cabinet" className="HeaderNavLink">
          Cabinet
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
