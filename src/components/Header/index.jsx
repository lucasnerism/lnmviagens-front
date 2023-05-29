import { Link } from "react-router-dom";
import { Container } from "./style.jsx";
import { IoEarthOutline, IoPerson } from "react-icons/io5";

export default function Header() {
  return (
    <Container>
      <Link to={'/'}><div><h1>Lnm</h1><IoEarthOutline className="react-icons" /><h1>Viagens</h1></div></Link>
      <div>
        <Link to={'/cities'}><h2>Cidades</h2></Link>
        <Link to={'/tickets'}><h2>Passagens</h2></Link>
        <Link to={'/hotels'}><h2>Hotéis</h2></Link>
      </div>
      {/* {<div><IoPerson className="react-icons" /></div>} */}
    </Container>
  );
}