import { useState } from "react";
import './Grades.css';

const MiddletermTwo = () => {
  const [grades, setGrades] = useState({
    practice: "",
    test: "",
    srsp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrades((prevGrades) => ({
      ...prevGrades,
      [name]: value.replace(/^0+(?!$)/, ""), // Удаляем ведущие нули
    }));
  };

  const practice = Number(grades.practice) || 0;
  const test = Number(grades.test) || 0;
  const srsp = Number(grades.srsp) || 0;

  const total = practice + test + srsp;
  const average = total / 16;

  return (
    <div className="grades-calculator">
      <h1>Рассчитать РК2</h1>

      <input
        type="number"
        name="practice"
        placeholder="Практика"
        value={grades.practice}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 700) e.target.value = 700;
        }}
        min={0}
        max={700}
      />
      <input
        type="number"
        name="test"
        placeholder="Тесты"
        value={grades.test}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 700) e.target.value = 700;
        }}
        min={0}
        max={100}
      />
      <input
        type="number"
        name="srsp"
        placeholder="СРСП"
        value={grades.srsp}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 400) e.target.value = 400;
        }}
        min={0}
        max={400}
      />

      <div className="result">
        <h2>Сумма баллов: {total}</h2>
        <h2>Средняя оценка: {isNaN(average) ? "-" : average.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default MiddletermTwo;

