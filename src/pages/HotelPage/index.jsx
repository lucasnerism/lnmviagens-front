import { useContext, useEffect, useState } from "react";
import { Container, ImgContainer, LoadingContainer, LowerContainer } from "./style.jsx";
import { DetailsContext } from "../../contexts/detailsContext.jsx";
import api from "../../services/api.js";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import colors from "../../constants/colors.js";


export default function Hotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const { cities } = useContext(DetailsContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getHotelById(id)
      .then(res => {
        setHotel(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleClick = (e) => {
    const city = cities.find(el => el.name === hotel.city).id;
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
      <h1>{hotel.name}</h1>
      <ImgContainer>
        {hotel.images?.map((image, index) => <img key={index} src={image} alt={hotel.name} />)}
      </ImgContainer>
      <LowerContainer>
        <div>
          <h1>Características</h1>
          <ul>
            <li>{`Localizado em ${hotel.cityName}`}</li>
            <li>{`Diárias de ${(hotel.price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</li>
            <li>{`${hotel.description}`}</li>
          </ul>
        </div>
        <div>
          <h1>Comodidades</h1>
          <ul>
            {hotel.facilities?.map((fac, index) => <li key={index}>{fac}</li>)}
          </ul>
        </div>
      </LowerContainer>

    </Container>

  );
}