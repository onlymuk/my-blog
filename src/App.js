import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path={"/tech"} element={<TechPage />}>
          <Route path="javascript" element={<JavascriptPage />}></Route>
          <Route path="react" element={<ReactPage />}></Route>
          <Route path="react/:docId" element={<ReactDocPage />}></Route>
        </Route>
        <Route path={"/blog"} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
