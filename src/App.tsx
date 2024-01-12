import "./App.css";
import { AppProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./pages/articles";
import AddArticles from "./pages/add-articles";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/add" element={<AddArticles />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
