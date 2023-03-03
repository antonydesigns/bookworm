import { Link } from "react-router-dom";

function Navbar({ props }) {
  const paths = props.paths;

  return (
    <div>
      <nav className="columns-2 text-center mt-5">
        <Link
          to={paths.home}
          className="block border border-black rounded-md mx-16"
        >
          Home
        </Link>
        <Link
          to={paths.newBook}
          className="block border border-black rounded-md mx-16"
        >
          New
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
