
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import Filter from "./pages/FIlter";
import UserTable from "./pages/UserTable";
import Chat from "./pages/Chat";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="filter" element={<Filter />} />
        <Route path="counter" element={<Counter />} />
        <Route path="stopwatch" element={<Stopwatch />} />
        <Route path="usertable" element={<UserTable/>} />
        <Route path="chat" element={<Chat/>} />
      </Routes>
  );
}

export default App;
