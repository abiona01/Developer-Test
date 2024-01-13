import "./App.css";
import { AppProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import CreateArticles from "./pages/create-articles";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/add" element={<CreateArticles />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
