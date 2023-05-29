import { useContext, useEffect, useState } from "react";
import { Button, Container, ContainerTutorial, Form, Select, TutorialBox } from "./style.jsx";
import { SlArrowRight } from "react-icons/sl";
import api from "../../services/api.js";
import { useNavigate, createSearchParams } from "react-router-dom";
import { DetailsContext } from "../../contexts/detailsContext.jsx";


export default function Home() {
  const [form, setForm] = useState({ fromCity: "", toCity: "" });
  const { cities } = useContext(DetailsContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (form.fromCity && form.fromCity === form.toCity) {
      return alert('As cidades de partida e destino são iguais');
    }
    if (form.fromCity) {
      params.fromCity = form.fromCity;
    }
    if (form.toCity) {
      params.toCity = form.toCity;
    }

    navigate({
      pathname: `/tickets`,
      search: `${createSearchParams(params)}`
    });
  };


  return (
    <Container>
      <ContainerTutorial>
        <TutorialBox><p>1. Escolha a cidade de partida</p></TutorialBox>
        <SlArrowRight className="react-icons" />
        <TutorialBox><p>2. Escolha a cidade que deseja visitar</p></TutorialBox>
        <SlArrowRight className="react-icons" />
        <TutorialBox><p>3. Vejas as passagens disponíveis</p></TutorialBox>
        <SlArrowRight className="react-icons" />
        <TutorialBox><p>4. Veja os locais onde pode se hospedar com conforto e tranquilidade</p></TutorialBox>
      </ContainerTutorial>
      <Form onSubmit={handleSubmit}>
        <label>
          <p>Nos conte de onde você vai viajar!</p>
          <Select name="fromCity"
            value={form.fromCity}
            onChange={handleChange}
          >
            <option value={''}>Selecione a cidade de partida</option>
            {cities?.map(city => <option key={city.id} value={city.id}>{`${city.name}, ${city.stateName}, ${city.countryName}`}</option>)}
          </Select>
        </label>

        <label htmlFor={'toCity'}>
          <p>Ainda não decidiu para onde ir? Deixe a opção abaixo vazia e veja todas as opções!</p>
          <Select name="toCity"
            value={form.toCity}
            onChange={handleChange}>
            <option value={''}>Selecione a cidade de destino</option>
            {cities?.map(city => <option key={city.id} value={city.id}>{`${city.name}, ${city.stateName}, ${city.countryName}`}</option>)}
          </Select>
        </label>

        <Button>Veja as passagens!</Button>
      </Form>
      <datalist id='cities'>
        {cities?.map(city => <option key={city.id} value={city.name} />)}
      </datalist>
    </Container>
  );
}