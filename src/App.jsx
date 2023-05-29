import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./styles/style.jsx";
import Home from "./pages/HomePage/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Cities from "./pages/CitiesPage/index.jsx";
import Tickets from "./pages/TicketsPage/index.jsx";
import Hotels from "./pages/HotelsPage/index.jsx";
import DetailsProvider from "./contexts/detailsContext.jsx";
import Ticket from "./pages/TicketPage/index.jsx";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <DetailsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/:id" element={<Ticket />} />
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
        </DetailsProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}