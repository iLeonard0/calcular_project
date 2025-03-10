import { useEffect, useState } from "react";
import Post from "../post/Post";
import "./PostList.css";

const imageUrl = "imagem1.jpg";

export default function PostList() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentHour, setCurrentHour] = useState("")

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

  useEffect(() => {
    const updateHour = () => {
      const today = new Date();
      const getHours =
        today.getHours().toString().padStart(2, "0") +
        ":" +
        today.getMinutes().toString().padStart(2, "0") +
        " hr";
      console.log("Hora atualizada:", getHours); 
      setCurrentHour(getHours);
    };

    updateHour();
    const hourInterval = setInterval(updateHour, 60000); 

    return () => clearInterval(hourInterval);
  }, []);

  return (
    <div className="post-list">
      <Post
        image={imageUrl}
        title="Para ser muito bom amanhã é preciso começar a praticar hoje"
        author="Prof. Cleiton"
        date={currentDate}
        time={currentHour}
        text={`São nos primeiros anos escolares que as criaças aprendem os fundamentos da matemártica,
           inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade 
           que a criança tenha nessa fase se refletirá por toda sua vida escolar :( `}
        text2={`Aqui você e seu filho irão encontrar, exercícios relacionados ao conteúdo ensinado
          nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;`}
      />

      <Post
        title="Matemática: O Alicerce para o Sucesso Escolar!"
        author="Prof. Cleiton"
        date={currentDate}
        time={currentHour}
        text={`Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico
          e aprendem as quatro operações essencias: adição, subtração, multiplicação e divisão.
          Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada!
          Aquim, você encontra exercícios divertidos e edutativos para aajuda seu filho
          a dominar as oeprações básicas e desenvolver confiança na matemática.`}
        text3={`Vamos juntos fortalecer essa base e transformar desafios em conquistas!
          #MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásica #AprendizadoDivertido #FundamentosEscolares
          #MatemáticaFácil #ConfiançaNosNúmeros`}
      />
    </div>
  );
}

