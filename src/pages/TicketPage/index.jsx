import { useContext, useEffect, useState } from "react";
import { Button, Container, LoadingContainer } from "./style.jsx";
import { DetailsContext } from "../../contexts/detailsContext.jsx";
import api from "../../services/api.js";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Oval } from "react-loader-spinner";
import colors from "../../constants/colors.js";

export default function Ticket() {
  const { id } = useParams();
  const [ticket, setTicket] = useState({});
  const { cities } = useContext(DetailsContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getTicketById(id)
      .then(res => {
        setTicket(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleClick = (e) => {
    const city = cities.find(el => el.name === ticket.toCity).id;
    const params = { city };

    navigate({
      pathname: `/hotels`,
      search: `${createSearchParams(params)}`
    });
  };

  if (loading) {
    return (
      <LoadingContainer>
        <Oval
          height={80}
          width={80}
          color={colors.primaryColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#FFFFFF"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <h1>Passagem para {ticket.toCity}</h1>
      <div>
        <h2>{`Cidade de Origem: ${ticket.fromCity}`}</h2>
        <h2>{`Cidade de Destino: ${ticket.toCity}`}</h2>
        <h2>{`Companhia aérea: ${ticket.airlineName}`}</h2>
        <h2>{`Horário de partida: ${dayjs(ticket.departureDate).format('DD/MM/YYYY - HH:mm:ss')}`}</h2>
        <h2>{`Horário previsto de chegada: ${dayjs(ticket.arrivalDate).format('DD/MM/YYYY - HH:mm:ss')}`}</h2>
        <h2>{`Preço da passagem: ${(ticket.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h2>
      </div>
      <Button onClick={handleClick}>Escolher hospedagem</Button>
    </Container>

  );
}