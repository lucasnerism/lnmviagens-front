import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.footer`
  width: 100%;
  padding: 0 5%;
  height: 60px;
  background-color: ${colors.primaryColor};
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  div{
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
    h1{
      font-size: 18px;
    }
  }
  .react-icons{
      font-size: 22px;
      margin: 0 2px 0 5px;
    }
`;