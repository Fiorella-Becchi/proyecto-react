// 1) importo librerias react y react dom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) obtener una referencia al div con id root
const el = document.getElementById("root");

// 3) le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(el);

// 4) creamos un componente
/*
function App(){
    //para imprimir variables utilizamos {} string y numeros y arrays (no booleanos, null y objetos)
    let msj = "Proximo proyecto";


    return (
<div>
<h1>{msj}</h1>
</div>


    ) 
}
*/
// 5) mostrar el componente en pantalla
root.render(<App/>)
