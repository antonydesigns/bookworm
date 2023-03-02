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
      new: "/new",
      update: "/update",
    },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar props={props} />
        <Routes>
          <Route path={props.paths.home} element={<Home />} />
          <Route path={props.paths.new} element={<NewBook />} />
          <Route path={props.paths.update} element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
      <p>Hi mom!</p>
      <h1>Hi Dad</h1>
    </div>
  );
}

export default App;
