import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateBook() {
  const navigate = useNavigate();
  const params = useParams();
  const [book, setBook] = useState({
    title: "",
    rating: "",
    cover: "",
  });

  useEffect(() => {
    const fetchSingleBook = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books/${params.id}`);
        setBook(...res.data);
      } catch (error) {
        console.log(error);
        setBook(..."");
      }
    };

    fetchSingleBook();
  }, []);

  const handleChange = (e) => {
    setBook((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
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
          onChange={handleChange}
          className="border border-black mt-5 rounded-md px-3"
          type="text"
          value={book.title}
          name="title"
        />
        <input
          onChange={handleChange}
          className="border border-black mt-5 rounded-md px-3"
          type="number"
          value={book.rating}
          name="rating"
        />
        <input
          onChange={handleChange}
          className="border border-black mt-5 rounded-md px-3"
          type="text"
          value={book.cover}
          name="cover"
        />

        <button
          onClick={handleUpdate}
          className="border border-black mt-5 rounded-md px-3 bg-green-400 hover:bg-green-300"
        >
          Update book
        </button>
      </form>
    </div>
  );
}

export default UpdateBook;
