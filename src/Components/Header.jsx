import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/">Eliza's Appz</NavLink>
      <NavLink to="/form">+ Add New</NavLink>
    </nav>
  );
}

export default Header;
