import { Routes, Route } from "react-router-dom";

/* Router */
import CMS from "./../Routers/cms";
import Home from "./../Routers/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cms" element={<CMS />} />
    </Routes>
  );
}

export default App;
