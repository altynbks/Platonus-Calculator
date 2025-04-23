import { useState, useEffect } from 'react';
import './Grades.css';

const FinalGrade = () => {
  const [exam, setExam] = useState("");
  const [rk1, setRk1] = useState("");
  const [rk2, setRk2] = useState("");

  const [finalGrade, setFinalGrade] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "exam":
        setExam(value.replace(/^0+(?!$)/, ""));
        break;
      case "rk1":
        setRk1(value.replace(/^0+(?!$)/, ""));
        break;
      case "rk2":
        setRk2(value.replace(/^0+(?!$)/, ""));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const examScore = Number(exam) || 0;
    const rk1Score = Number(rk1) || 0;
    const rk2Score = Number(rk2) || 0;

    const final = (examScore * 0.4) + (rk1Score * 0.3) + (rk2Score * 0.3);

    setFinalGrade(final.toFixed(2));
  }, [exam, rk1, rk2]);

  return (
    <div className="grades-calculator">
      <h1>Рассчитать итоговую оценку</h1>

      <input
        type="number"
        name="exam"
        placeholder="Экзамен"
        value={exam}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 100) e.target.value = 100;
        }}
        min={0}
        max={100}
      />
      <input
        type="number"
        name="rk1"
        placeholder="РК1"
        value={rk1}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 100) e.target.value = 100;
        }}
        min={0}
        max={100}
      />
      <input
        type="number"
        name="rk2"
        placeholder="РК2"
        value={rk2}
        onChange={handleChange}
        onInput={(e) => {
          if (e.target.value < 0) e.target.value = 0;
          if (e.target.value > 100) e.target.value = 100;
        }}
        min={0}
        max={100}
      />

      <div className="result">
        <h2>Итоговая оценка: {finalGrade !== null ? finalGrade : "-"}</h2>
      </div>
    </div>
  );
};

export default FinalGrade;