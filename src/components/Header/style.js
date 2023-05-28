import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.header`
  width: 100%;
  padding: 0 5%;
  height: 60px;
  background-color: ${colors.primaryColor};
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  div{
    display: flex;    
    h1{
      font-size: 22px;
      font-weight: 700;
    }
    h2{
      font-size: 16px;
    }
    &:nth-child(2){
      width: 300px;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .react-icons{
      font-size: 22px;
      margin: 0 2px 0 5px;
    }
`;