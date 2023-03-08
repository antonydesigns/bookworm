import { useState, useEffect } from "react";

function NewBook() {
  const [newBook, setNewBook] = useState({
    title: "",
    rating: "",
    cover: "",
  });

  const handleChange = (e) => {
    setNewBook((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
    console.log(newBook);
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
          type="text"
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

        <button className="border border-black mt-5 rounded-md px-3 bg-green-400 hover:bg-green-300">
          Submit new book
        </button>
      </form>
    </div>
  );
}

export default NewBook;
