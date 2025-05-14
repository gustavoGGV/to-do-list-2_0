import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import InsideBodyContent from "./components/InsideBodyContent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <InsideBodyContent />
  </StrictMode>
);
