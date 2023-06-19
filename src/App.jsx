import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import NewUser from "./NewUser";
import UpdateUser from "./UpdateUser";

const App = () => {
  return (
    <main className="relative">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-user" element={<NewUser />} />
        <Route exact path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </main>
  );
};

export default App;
