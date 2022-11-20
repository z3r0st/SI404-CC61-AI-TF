import "./App.css";
import Introduction from "./Introduction.js";
import Form from "./Form.js";
import Result from "./Result.js";
import { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

function App() {
  const [model, setModel] = useState();

  const loadModel = async () => {
    const result = await tf.loadLayersModel(
      "https://github.com/z3r0st/SI404-CC61-AI-TF/blob/main/model.json"
    );
    setModel(result);
  };

  useEffect(() => {
    loadModel();
  }, []);

  const validateDecision = () => {
    let a = document.getElementById("statement-1").value;
    let b = document.getElementById("statement-2").value;

    if (a === "" && b === "") {
      document.getElementById("output").innerHTML =
        "Primero debes ingresar dos enunciados";
      return;
    }

    b = b[0].toLowerCase() + b.slice(1);

    let aTruth = document.getElementById("statement-1-truth").checked ? 1 : 0;
    console.log("A = " + aTruth);
    let bTruth = document.getElementById("statement-2-truth").checked ? 1 : 0;
    console.log("B = " + bTruth);
    let operator = document.querySelector(
      'input[name="operator"]:checked'
    ).value;
    console.log("Operator = " + operator);

    let data = tf.tensor2d([[aTruth, bTruth, operator]]);
    let prediction = model.predict(data).dataSync();
    let result = Math.round(prediction[0], 1) === 1;
    [aTruth, bTruth] = [aTruth === 1, bTruth === 1];
    console.log(aTruth, bTruth, a, b);
    document.getElementById("output").innerHTML = result
      ? `Buena decisión :)<br/> ${
          "<b>" +
          (aTruth ? "" : "No ") +
          a +
          (b[0].toLowerCase() === "i" && bTruth ? "</b> e <b>" : "</b> y <b>") +
          (bTruth ? "" : "no ") +
          b +
          "</b> es una buena combinación."
        }`
      : `Mala decisión :(<br/> ${
          "<b>" +
          (aTruth ? "" : "No ") +
          a +
          (b[0].toLowerCase() === "i" && bTruth ? "</b> e <b>" : "</b> y <b>") +
          (bTruth ? "" : "no ") +
          b +
          "</b> no es una buena combinación."
        }`;
    console.log(result);
  };

  return (
    <main>
      <div className="main">
        <Introduction />
        <Form validateDecision={validateDecision} />
        <Result />
      </div>
    </main>
  );
}

export default App;
