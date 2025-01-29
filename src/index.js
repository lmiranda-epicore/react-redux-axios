import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";

// Selecciona el contenedor raíz
const container = document.getElementById("root");

// Crea una raíz
const root = createRoot(container);

// Renderiza la aplicación
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);