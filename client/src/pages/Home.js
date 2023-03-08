import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books`);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
        setBooks([]);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/` + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="books mt-5">
        <div className="cards cols-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="card overflow-hidden border border-black rounded-lg text-center"
            >
              <Link>
                <div className=" bg-blue-200 hover:bg-blue-100">
                  <p className="title">{book.title}</p>
                  <p className="rating">{book.rating} / 10</p>
                </div>
              </Link>
              <div className="options bg-blue-200">
                <div className="update-btn bg-green-300 cursor-pointer hover:bg-green-200">
                  <Link to={`/update/${book.id}`}>Update</Link>
                </div>
                <div
                  className="delete-btn bg-red-500 cursor-pointer hover:bg-red-300"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
