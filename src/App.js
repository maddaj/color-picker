import React, { useState } from "react";
import "./App.css";
import { centralPanelStyle, appHeader } from "./styles";
import styled from 'styled-components';
import { Square } from "./components/Square";

const r = 100;
const g = 100;
const b = 100;

// Création de div stylisée avec styled-components
const Footer = styled.div`
  background-color: #282c34;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: red;
`;

// On peut hériter d'un styled component et le modifier ou l'étendre
const BlueTitle = styled(Title)`
  color: blue;
`;

// On peut acceder au props et faire que le style s'adapte dynamiquement
const Description = styled.div`
  font-size: 0.8em;
  font-weight: ${(props) => (props.important ? "bold" : "normal")};
`;

// On peut utiliser toutes les balises HTML
const Button = styled.button`
margin: 10px;
  color: #ff3333;
  &:hover {
    color: #0080ff;
  }
`;

// Création d'un style pour un composant React pré-existant
// const NewColor = styled.css`
// background-color: rgb(${r}, ${g}, ${b});
// width: 100px;
// height: 100px;
// `;

// On lui donne comme valeur un objet JS représentant le style à appliquer
// La modification inline de l'objet de style est ici seulement pour illustrer la manière de faire immutable.

// On créer un delta entre chaque incrémentation
const Delta = 30;
// On bloque la valeur possible entre 0 et 255 pour éviter des erreurs
const affectColor = (color, v) => Math.min(Math.max(color + v, 0), 255);

const colorHandler = (setter, v) =>
  setter((previousState) => affectColor(previousState, v));

function App() {
  const [r, setR] = useState(100);
  const [g, setG] = useState(100);
  const [b, setB] = useState(0);
  return (
    <div className="App">
      <header style={appHeader}>
        <Title>
          CSS in JS
        </Title>
        <BlueTitle>
          (Et petits à petits aller vers la gestion d'états complexe...)
        </BlueTitle>
      </header>
      <div style={{ ...centralPanelStyle, margin: "10vh" }}>
        <Description important>Personnalisation RGB</Description>
        <Description>
          Vous pouvez ajuster ici les valeurs RGB de la couleur principale de votre thème.
        </Description>
        <div>
          <Button onClick={() => colorHandler(setR, +Delta)}>+ rouge</Button>
          <Button onClick={() => colorHandler(setR, -Delta)}>- rouge</Button>
        </div>
        <div>
          <Button onClick={() => colorHandler(setG, +Delta)}>+ vert</Button>
          <Button onClick={() => colorHandler(setG, -Delta)}>- vert</Button>
        </div>
        <div>
          <Button onClick={() => colorHandler(setB, +Delta)}>+ bleu</Button>
          <Button onClick={() => colorHandler(setB, -Delta)}>- bleu</Button>
        </div>
        <div>
          <Button onClick={() => { colorHandler(setR, +Delta); colorHandler(setG, +Delta); colorHandler(setB, +Delta) }}>+ luminosité</Button>
          <Button onClick={() => { colorHandler(setR, -Delta); colorHandler(setG, -Delta); colorHandler(setB, -Delta) }}>- luminosité</Button>
        </div>
        <Square red={r} blue={b} green={g}></Square>
        <p>Quantité de rouge : {r}</p>
        <p>Quantité de vert : {g}</p>
        <p>Quantité de bleu : {b}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
