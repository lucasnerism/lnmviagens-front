import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  height: 750px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.primaryColor};
  h1{
    align-self: center;
    font-size: 28px;
    color: ${colors.primaryColor};
  }
  h2{
    font-size: 22px;
  }
  h2~h2{
    margin-top: 15px;
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
  align-self: center;
`;