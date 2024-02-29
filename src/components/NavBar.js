import { NavLink } from "react-router-dom";
import "/Users/kobyfink/Development/code/phase-2/react-hooks-react-router-routes-lab-v6/src/components/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </nav>
    );
};

export default NavBar;
