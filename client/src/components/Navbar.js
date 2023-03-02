import { Link } from "react-router-dom";

function Navbar({ props }) {
  const paths = props.paths;

  return (
    <div>
      <nav>
        <Link to={paths.home}>Home</Link>
        <Link to={paths.new}>New</Link>
      </nav>
    </div>
  );
}

export default Navbar;
