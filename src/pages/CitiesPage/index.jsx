import { useContext } from "react";
import { Container } from "./style.jsx";
import { DetailsContext } from "../../contexts/detailsContext.jsx";
import { Link } from "react-router-dom";

export default function Cities() {
  const { cities } = useContext(DetailsContext);

  return (
    <Container>
      {cities?.map(city => <Link to={`/tickets?toCity=${city.id}`} key={city.id}><h1>{`${city.name}, ${city.stateName}, ${city.countryName}`}</h1></Link>)}
    </Container>
  );
}