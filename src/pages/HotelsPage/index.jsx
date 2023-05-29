import { useContext, useEffect, useState } from "react";
import { Container, Filter, RightContainer, Hotel, Select, Form, Button, HotelsContainer } from "./style.jsx";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import api from "../../services/api.js";
import { DetailsContext } from "../../contexts/detailsContext.jsx";

export default function Hotels() {
  const [form, setForm] = useState({ minPrice: 0, maxPrice: 0, orderBy: "price", city: "" });
  const [searchParams] = useSearchParams();
  const { maxPriceHotel, cities } = useContext(DetailsContext);
  const [city, setCity] = useState({});
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    const obj = { ...form };
    obj.city = searchParams.get("city");
    obj.minPrice = searchParams.get("minPrice");
    obj.maxPrice = searchParams.get("maxPrice");
    setForm(obj);
    const newCity = cities.find(el => el.id === Number(obj.city));
    setCity(newCity);

    const newQuery = createSearchParams(obj).toString();

    api.getHotels(newQuery)
      .then(res => {
        const ids = res.data.map(({ id }) => id);
        const filtered = res.data.filter(({ id }, index) => !ids.includes(id, index + 1));
        setHotels(filtered);
      })
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
    const querystring = createSearchParams(params).toString();
    history.pushState(null, '', location.pathname + '?' + querystring);
    api.getHotels(querystring)
      .then(res => {
        const ids = res.data.map(({ id }) => id);
        const filtered = res.data.filter(({ id }, index) => !ids.includes(id, index + 1));
        setHotels(filtered);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Filter>
        <Form onSubmit={handleSubmit}>
          <label>
            Valor Mínimo
            <input name="minPrice" id="minPrice" type="range" min={'0'} max={maxPriceHotel} defaultValue={'0'} step={1} onChange={handleChange} />
            <div><p>0</p><output>
              {(Number(form.minPrice) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </output><p>MAX</p></div>
          </label>
          <label>
            Valor Máximo
            <input name="maxPrice" id="maxPrice" type="range" min={'0'} max={maxPriceHotel} defaultValue={'0'} step={1} onChange={handleChange} />
            <div><p>0</p><output>
              {(Number(form.maxPrice) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </output><p>MAX</p></div>
          </label>
          <label>
            Trocar cidade
            <Select name="city"
              value={form.city}
              onChange={handleChange}>
              {cities?.map(city => <option key={city.id} value={city.id}>{`${city.name}, ${city.stateName}, ${city.countryName}`}</option>)}
            </Select>
          </label>
          <Button>Aplicar Filtros</Button>
        </Form>
      </Filter>
      <RightContainer>
        <h1>{city ? `Hotéis em ${city.name}` : "Hotéis"}</h1>
        <HotelsContainer>
          {hotels?.map(hotel => <Link key={hotel.id} to={`/hotels/${hotel.id}`}><Hotel>
            <img src={hotel.mainImage} alt={hotel.name} />
            <div>
              <p>{hotel.name}</p>
              <p>{(hotel.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
          </Hotel></Link>)}
        </HotelsContainer>

      </RightContainer>
    </Container>
  );
}