import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  padding: 180px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 28px;
    color: ${colors.primaryColor};
  }
  a~a{
    margin-top: 10px;
  }
`;