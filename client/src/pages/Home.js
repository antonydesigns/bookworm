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

  return (
    <div>
      <div className="books mt-5">
        <div className="cards grid grid-cols-3">
          {books.map((book) => (
            <Link
              key={book.id}
              className="card border border-black rounded-lg text-center mx-5 mt-5 block bg-blue-200 hover:bg-blue-100"
            >
              <p className="title">{book.title}</p>
              <p className="rating">{book.rating}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
