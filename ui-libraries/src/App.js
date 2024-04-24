import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import DetailCourse from "./component/DetailCourse";
import DetailCoursePage from "./pages/DetailCoursePage";
import AddCourse from "./component/course/AddCourse";
import TableCourse from "./component/course/TableCourse";
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<DetailCoursePage />} />
          <Route path="/course/add" element={<AddCourse />} />
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
