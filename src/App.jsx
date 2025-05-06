import React from "react";
import "./App.css";
import arri from "./Components/Images/arri.jpeg"
import Red from "./Components/Images/Red.jpg"
import blackmagic from "./Components/Images/blackmagic.jpeg"
import c300 from "./Components/Images/c300.jpeg"
import fx6 from "./Components/Images/fx6.jpeg"
import varicam from "./Components/Images/varicam.jpeg"



const cinemaCameras = [
  {
    id: 1,
    name: "ARRI Alexa Mini LF",
    model: "Large Format",
    image: arri,
  },
  {
    id: 2,
    name: "RED KOMODO 6K",
    model: "Super 35mm",
    image: Red,
  },
  {
    id: 3,
    name: "Blackmagic URSA Mini Pro 12K",
    model: "Super 35mm",
    image: blackmagic,
  },
  {
    id: 4,
    name: "Canon EOS C300 Mark III",
    model: "Super 35mm",
    image: c300,
  },
  {
    id: 5,
    name: "Sony FX6",
    model: "Full-Frame",
    image: fx6,
  },
  {
    id: 6,
    name: "Panasonic Varicam LT",
    model: "Super 35mm",
    image: varicam,
  },
];

  

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Cinema Cameras</h1>
      <div className="camera-grid">
        {cinemaCameras.map((camera) => (
          <div key={camera.id} className="camera-card">
            <img src={camera.image} alt={camera.name} className="camera-image" />
            <h2>{camera.name}</h2>
            <p>{camera.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
