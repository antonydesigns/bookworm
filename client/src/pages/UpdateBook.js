import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateBook() {
  const navigate = useNavigate();
  const id = useParams();
  const [book, setBook] = useState({
    title: "",
    rating: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8800/books`, book);
      navigate("/");
    } catch (error) {
      console.log(error);
      setBook({
        title: "",
        rating: " ",
        cover: "",
      });
    }
  };

  return (
    <div>
      <form className="mid down mt-5">
        <input
          className="border border-black mt-5 rounded-md px-3"
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          className="border border-black mt-5 rounded-md px-3"
          type="number"
          placeholder="rating"
          onChange={handleChange}
          name="rating"
        />
        <input
          className="border border-black mt-5 rounded-md px-3"
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />

        <button
          onClick={handleClick}
          className="border border-black mt-5 rounded-md px-3 bg-green-400 hover:bg-green-300"
        >
          Update book
        </button>
      </form>
    </div>
  );
}

export default UpdateBook;
