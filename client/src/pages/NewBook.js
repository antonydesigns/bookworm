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
      <form className="">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="rating"
          onChange={handleChange}
          name="rating"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
        />
      </form>
    </div>
  );
}

export default NewBook;
