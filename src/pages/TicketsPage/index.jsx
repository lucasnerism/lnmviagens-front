import { useContext, useEffect, useState } from "react";
import { Container, Filter, RightContainer, Ticket, Select, Form, Button, TicketsContainer } from "./style.jsx";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import api from "../../services/api.js";
import { DetailsContext } from "../../contexts/detailsContext.jsx";
import dayjs from "dayjs";

export default function Tickets() {
  const [form, setForm] = useState({ minPrice: "0", maxPrice: "0", orderBy: "departure_date", fromCity: "", toCity: "" });
  const [searchParams] = useSearchParams();
  const { maxPriceTicket, cities } = useContext(DetailsContext);
  const [city, setCity] = useState({});
  const [tickets, setTickets] = useState([]);


  useEffect(() => {
    const obj = { ...form };
    obj.fromCity = searchParams.get("fromCity");
    obj.toCity = searchParams.get("toCity");
    obj.minPrice = searchParams.get("minPrice");
    obj.maxPrice = searchParams.get("maxPrice");
    setForm(obj);
    const newCity = cities.find(el => el.id === Number(obj.toCity));
    setCity(newCity);

    const newQuery = createSearchParams(obj).toString();

    api.getTickets(newQuery)
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));

  }, []);

  const handleChange = (e) => {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { ...form };
    if (form.fromCity === form.toCity) {
      return alert('As cidades de partida e destino são iguais');
    }
    const querystring = createSearchParams(params).toString();
    location.pathname;
    history.pushState(null, '', location.pathname + '?' + querystring);
    api.getTickets(querystring)
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Filter>
        <Form onSubmit={handleSubmit}>
          <label>
            Valor Mínimo
            <input name="minPrice" id="minPrice" type="range" min={'0'} max={maxPriceTicket} defaultValue={'0'} step={1} onChange={handleChange} />
            <div><p>0</p><output>
              {(Number(form.minPrice) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </output><p>MAX</p></div>
          </label>
          <label>
            Valor Máximo
            <input name="maxPrice" id="maxPrice" type="range" min={'0'} max={maxPriceTicket} defaultValue={'0'} step={1} onChange={handleChange} />
            <div><p>0</p><output>
              {(Number(form.maxPrice) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </output><p>MAX</p></div>
          </label>
          <label>
            Trocar cidade de partida
            <Select name="fromCity"
              value={form.fromCity}
              onChange={handleChange}>
              {cities?.map(city => <option key={city.id} value={city.id}>{`${city.name}, ${city.stateName}, ${city.countryName}`}</option>)}
            </Select>

          </label>
          <label>
            Trocar cidade de destino
            <Select name="toCity"
              value={form.toCity}
              onChange={handleChange}>
              {cities?.map(city => <option key={city.id} value={city.id}>{`${city.name}, ${city.stateName}, ${city.countryName}`}</option>)}
            </Select>
          </label>
          <Button>Aplicar Filtros</Button>
        </Form>
      </Filter>
      <RightContainer>
        <h1>{city ? `Passagens para ${city.name}` : "Passagens"}</h1>
        <TicketsContainer>
          {tickets?.map(ticket => <Link key={ticket.id} to={`/tickets/${ticket.id}`}><Ticket>
            <img src={ticket.airlineImage} alt={ticket.airlineName} />
            <div>
              <p>{dayjs(ticket.departureDate).format('DD/MM/YYYY - HH:mm:ss')}</p>
              <p>{(ticket.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p>{`Saindo de: ${ticket.fromCity}`}</p>
            </div>
          </Ticket></Link>)}
        </TicketsContainer>

      </RightContainer>
    </Container>
  );
}