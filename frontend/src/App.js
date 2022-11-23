import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessForm from "./components/AccessForm/AccessForm";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/access" element={<AccessForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
