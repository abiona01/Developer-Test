import "./App.css";
import { AppProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import CreateArticles from "./pages/create-articles";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/add" element={<CreateArticles />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
