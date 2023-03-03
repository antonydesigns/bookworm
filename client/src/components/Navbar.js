import { Link } from "react-router-dom";

function Navbar({ props }) {
  const paths = props.paths;

  return (
    <div>
      <nav className="flex justify-center text-center mt-5">
        <Link
          to={paths.home}
          className="block border border-black rounded-md w-60  bg-yellow-200 hover:bg-yellow-100 mx-5"
        >
          Home
        </Link>
        <Link
          to={paths.newBook}
          className="block border border-black rounded-md w-60  bg-green-300 hover:bg-green-200 mx-5"
        >
          New
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
