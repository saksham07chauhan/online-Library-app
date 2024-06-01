import { Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
