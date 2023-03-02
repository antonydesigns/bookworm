import { Link } from "react-router-dom";

function Navbar({ props }) {
  const paths = props.paths;

  return (
    <div>
      <nav>
        <Link to={paths.home}>Home</Link>
        <Link to={paths.newBook}>New</Link>
      </nav>
    </div>
  );
}

export default Navbar;
