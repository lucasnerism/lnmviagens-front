import { Link } from "react-router-dom";
import { Container } from "./style.jsx";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <Container>
      <div>
        <h1>2023 - <span><Link to={'https://github.com/lucasnerism'}>lucasnerism</Link></span></h1>
      </div>
      <div>
        <Link to={'https://www.linkedin.com/in/lucas-neris-matosinhos-13a054177/'}><IoLogoLinkedin className="react-icons" /></Link>
        <Link to={'https://github.com/lucasnerism/lnmviagens-front'}><h1>front-end</h1></Link>
        <Link to={'https://github.com/lucasnerism/lnmviagens'}><h1>back-end</h1></Link>
      </div>
    </Container>
  );
}