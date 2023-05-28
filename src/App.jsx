import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { Container } from "./styles/style.js";


export default function App() {

  return (

    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>

  );
}