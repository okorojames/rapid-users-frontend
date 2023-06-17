import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
