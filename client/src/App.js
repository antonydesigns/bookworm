import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/tailwind.css";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import UpdateBook from "./pages/UpdateBook";
import Navbar from "./components/Navbar";

function App() {
  const props = {
    paths: {
      home: "/",
      newBook: "/new",
      updateBook: "/update",
    },
  };

  const paths = props.paths;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar props={props} />
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.newBook} element={<NewBook />} />
          <Route path={paths.updateBook} element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
