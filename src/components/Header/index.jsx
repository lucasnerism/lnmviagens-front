import { Link } from "react-router-dom";
import { Container } from "./style.js";
import { IoEarthOutline, IoPerson } from "react-icons/io5";

export default function Header() {
  return (
    <Container>
      <Link to={'/'}><div><h1>Lnm</h1><IoEarthOutline className="react-icons" /><h1>Viagens</h1></div></Link>
      <div>
        <h2>Cidades</h2>
        <h2>Passagens</h2>
        <h2>Hotéis</h2>
      </div>
      <div><IoPerson className="react-icons" /></div>
    </Container>
  );
}