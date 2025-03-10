import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      const formattedDate =
        today.getDate().toString().padStart(2, "0") +
        "/" +
        (today.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        today.getFullYear();
      setCurrentDate(formattedDate);
    };

    updateDate();
    const dateInterval = setInterval(updateDate, 86400000);

    return () => clearInterval(dateInterval);
  }, []);

  return (
    <header className="header">
      <div className="header-logo">Calcular</div>
      <div className="header-subtitle">Ferramentas de aprendizagem em cálculo</div>
      <div className="date-bar">{currentDate}</div>
    </header>
  );
}
