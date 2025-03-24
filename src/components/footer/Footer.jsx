// src/components/Footer/Footer.jsx
import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("")

  useEffect(() => {
    const today = new Date()
    const getYear =
      today.getFullYear()
    setCurrentYear(getYear)
  }, [])

  return (
    <footer className="footer" style={{display:"flex", textAlign:"center", justifyContent:'center'}}>
      <p>{currentYear} - Calcular Project - Student: Leonardo Folle</p>
    </footer>
  );
}

