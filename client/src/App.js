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

  const paths = props.paths;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar props={props} />
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.new} element={<NewBook />} />
          <Route path={paths.update} element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
      <p>Hi mom!</p>
      <h1>Hi Dad</h1>
    </div>
  );
}

export default App;
