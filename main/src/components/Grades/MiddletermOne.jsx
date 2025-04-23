import { useState } from "react";
import './Grades.css';

const MiddletermOne = () => {
    const [grades, setGrades] = useState({
        practice: "",
        test: "",
        srsp: "",
    });

    // Обработка изменений всех инпутов
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGrades((prevGrades) => ({
            ...prevGrades,
            [name]: value.replace(/^0+(?!$)/, ""), // Удаляем ведущие нули
        }));
    };

    // Преобразуем строки в числа
    const practice = Number(grades.practice);
    const test = Number(grades.test);
    const srsp = Number(grades.srsp);

    // Общая сумма
    const total = practice + test + srsp;

    // Средняя оценка (делим на 18)
    const average = total / 18;
    

    return (
        <div className="grades-calculator">
            <h1>Рассчитать РК1</h1>

            <input
                type="number"
                name="practice"
                placeholder="Практика"
                value={grades.practice}
                onChange={handleChange}
                min={0}
                max={100}
                minlength={1}
                maxlength={3}
                onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 0; // Минимум 0
                    if (e.target.value > 800) e.target.value = 800; // Максимум 100
                }}
            />
            <input
                type="number"
                name="test"
                placeholder="Тесты"
                value={grades.test}
                onChange={handleChange}
                min={0}
                max={800}
                minlength={1}
                maxlength={3}
                onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 0; // Минимум 0
                    if (e.target.value > 800) e.target.value = 800; // Максимум 100
                }}
            />
            <input
                type="number"
                name="srsp"
                placeholder="СРСП"
                value={grades.srsp}
                onChange={handleChange}
                min={0}
                max={400}
                minlength={1}
                maxlength={3}
                onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 0; // Минимум 0
                    if (e.target.value > 400) e.target.value = 400; // Максимум 100
                }}
            />

            <div className="result">
                <h2>Сумма баллов: {total}</h2>
                <h2>Средняя оценка: {isNaN(average) ? "-" : average.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default MiddletermOne;

