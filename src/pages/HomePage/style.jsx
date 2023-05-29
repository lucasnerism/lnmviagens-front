import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  padding: 60px 0;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTutorial = styled.section`
  width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TutorialBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  &:nth-child(1){
    background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('https://4.bp.blogspot.com/-EFSW8BMd3Uo/T0IiHeY-5dI/AAAAAAAAQbs/iALU4JaLf_4/s1600/Praca_do_Papa_Belo_Horizonte.jpg');
    background-size: cover;
    background-position: center;
  }
  &:nth-child(3){
    background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('https://rodoviariaonline.com.br/wp-content/uploads/2018/10/os-pontos-turisticos-de-belo-horizonte-que-voce-precisa-conhecer-1.jpg');
    background-size: cover;
    background-position: center;
  }
  &:nth-child(5){
    background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('https://c.wallhere.com/photos/0e/0e/Airbus_Airbus_A350_airplane_flying_aircraft_planes-1444145.jpg!d');
    background-size: cover;
    background-position: center;
  }
  &:nth-child(7){
    background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('http://www.thebigchilli.com/uploads/1/2/2/0/12204015/02-gmpp_orig.jpg');
    background-size: cover;
    background-position: center;
  }
  .react-icons{
    color: ${colors.primaryColor};
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;  
  border: 1px solid rgba(25, 35, 57, 0.25);
  box-shadow: 0px 4px 24px rgba(25, 35, 57, 0.12);
  border-radius: 12px;
  padding: 0 5px;
  color: ${colors.primaryColor};
  font-size: 14px;
  :disabled{
    opacity: 0.7;
  }
  :focus{
    border: 3px solid ${colors.primaryColor};
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 80px;
  border: 1px solid rgba(25, 35, 57, 0.25);
  box-shadow: 0px 4px 24px rgba(25, 35, 57, 0.12);
  border-radius: 12px;
  background: ${colors.primaryColor};
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
`;

export const Form = styled.form`
  width: 900px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  label{
    color: ${colors.primaryColor};        
    width: 100%;
    p{
      padding: 0 5px;
    }
  }
`;