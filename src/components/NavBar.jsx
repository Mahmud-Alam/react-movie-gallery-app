import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
    // console.log(scrollValue);
  };

  addEventListener("scroll", changeValueOnScroll);

  return (
    <nav className={`${nav === true ? "sticky navbar" : "navbar"}`}>
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        {/* <Link to='/' className="nav-link">Home</Link> */}
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
