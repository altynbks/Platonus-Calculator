import { useState, useEffect } from 'react';
import './Gpa.css';


const Gpa = () => {
    const [subjects, setSubjects] = useState([]);
    const [grades, setGrades] = useState([]);
    const [credits, setCredits] = useState([]);
    const [gpa, setGpa] = useState(0);

    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [credit, setCredit] = useState("");

    const handleAddSubject = () => {
        if (subject && grade && credit) {
            const normalizedGrade = normalizeGrade(parseFloat(grade));
            setSubjects([...subjects, subject]);
            setGrades([...grades, normalizedGrade]);
            setCredits([...credits, parseFloat(credit)]);
            setSubject("");
            setGrade("");
            setCredit("");
        }
    };

    const handleRemoveSubject = (index) => {
        const newSubjects = subjects.filter((_, i) => i !== index);
        const newGrades = grades.filter((_, i) => i !== index);
        const newCredits = credits.filter((_, i) => i !== index);
        setSubjects(newSubjects);
        setGrades(newGrades);
        setCredits(newCredits);
    };

    const normalizeGrade = (grade) => {
        if (grade >= 95) return 4.0; // A
        if (grade >= 90) return 3.67; // A-
        if (grade >= 85) return 3.33; // B+
        if (grade >= 80) return 3.0; // B
        if (grade >= 75) return 2.67; // B-
        if (grade >= 70) return 2.33; // C+
        if (grade >= 65) return 2.0; // C
        if (grade >= 60) return 1.67; // C-
        if (grade >= 55) return 1.33; // D+
        if (grade >= 50) return 1.0; // D
        if (grade >= 25) return 0.5; // FX
        return 0.0; // F
    };

    useEffect(() => {
        try {
            const totalCredits = credits.reduce((acc, cur) => acc + cur, 0);
            const weightedGrades = grades.reduce((acc, cur, i) => acc + cur * credits[i], 0);
            setGpa(totalCredits ? (weightedGrades / totalCredits).toFixed(2) : 0);
        } catch (error) {
            console.error("Ошибка при расчете GPA:", error);
        }
    }, [grades, credits]);

    return (
        <div className="gpa-calculator">
            <h1>Рассчитать GPA</h1>
            <input
                type="text"
                placeholder="Предмет"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                minLength={0}
                maxLength={50}
                pattern="[A-Za-z0-9\s]+"
            />
            <input
                type="number"
                placeholder="Оценка (0-100)"
                value={grade}
                onChange={(e) => setGrade(e.target.value.replace(/^0+(?!$)/, ""))}
                onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 0;
                    if (e.target.value > 100) e.target.value = 100;
                }}
                min={0}
                max={100}
            />
            <input
                type="number"
                placeholder="Кредиты (0-10)"
                value={credit}
                onChange={(e) => setCredit(e.target.value.replace(/^0+(?!$)/, ""))}
                onInput={(e) => {
                    if (e.target.value < 0) e.target.value = 0;
                    if (e.target.value > 10) e.target.value = 10;
                }}
                min={0}
                max={10}
            />
            <button onClick={handleAddSubject}>Добавить педмет и оценки</button>

            <ul>
                {subjects.map((subj, index) => (
                    <li key={index}>
                        {subj}
                        <br />
                        GPA: {grades[index]} - Кредиты: {credits[index]}
                        <button onClick={() => handleRemoveSubject(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
                <div className="result">
            <h2>Ваш GPA: {gpa}</h2>
            </div>
        </div>
    );
};

export default Gpa;