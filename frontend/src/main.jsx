import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <RecipeProvider>
          <App />
          <ToastContainer />
        </RecipeProvider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
);
