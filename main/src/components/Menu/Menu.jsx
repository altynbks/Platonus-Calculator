import { Routes, Route, Link } from "react-router-dom";
import MiddletermOne from "../Grades/MiddletermOne";
import MiddletermTwo from "../Grades/MiddletermTwo";
import FinalGrade from "../Grades/FinalGrade";
import Gpa from "../Grades/Gpa";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <Link to="/middleterm-one">Калькулятор РК1</Link>
        <Link to="/middleterm-two">Калькулятор РК2</Link>
        <Link to="/final-grade">Калькулятор итоговой оценки</Link>
        <Link to="/gpa">Калькулятор GPA</Link>
      </nav>

      <Routes>
        <Route path="/middleterm-one" element={<MiddletermOne />} />
        <Route path="/middleterm-two" element={<MiddletermTwo />} />
        <Route path="/final-grade" element={<FinalGrade />} />
        <Route path="/gpa" element={<Gpa />} />
      </Routes>
    </div>
  );
};

export default Menu;
