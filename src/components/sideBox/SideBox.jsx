import { useState } from "react";
import "./SideBox.css";

export default function SideBox() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({ num1: 50, num2: 9, operator: "+" });
  const [response, setResponse] = useState("");

  const handleValidate = () => {
    const correctAnswer = eval(`${question.num1} ${question.operator} ${question.num2}`);
    if (parseInt(response) === correctAnswer) {
      alert("Resposta correta!");
      setScore(score + 10);
      generateNewQuestion(); 
    } else {
      alert("Resposta incorreta. Tente novamente!");
    }
  };

  const generateNewQuestion = () => {
    const operators = ["+", "-", "*", "/"];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    setQuestion({ num1, num2, operator: randomOperator });
    setResponse(""); 
  };

  const handleNewGame = () => {
    setScore(0);
    generateNewQuestion(); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleValidate(); 
    }
  };

  return (
    <div className="side-box">
      <h1>Você tem {score} pontos</h1>
      <button className="button blue" onClick={generateNewQuestion}>Sortear Desafio</button>
      <hr className="hr1"/>
      <div className="question-section">
        <p> <strong>Quanto é :</strong></p>
        <div className="question">
          <span className="numOperator">{question.num1}</span>
          <span className="numOperator">{question.operator}</span>
          <span className="numOperator">{question.num2}</span>
        </div>
        <p style={{marginTop: '50px'}}> <strong>Sua Resposta :</strong></p>
        <input
          type="text"
          className="response-input"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
      </div>
      <div className="button-container">
        <button className="button green" onClick={handleValidate}>Validar</button>
        <button className="button red" onClick={handleNewGame}>Novo Jogo</button>
      </div>
    </div>
  );
}
