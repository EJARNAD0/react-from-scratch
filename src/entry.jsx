import { createRoot } from "react-dom/client";
import "./app.css";
import { StrictMode } from "react";
import { App } from "./app.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const app = document.getElementById('app')
// const root = ReactDOM.createRoot(app)

// root.render(<App />)
