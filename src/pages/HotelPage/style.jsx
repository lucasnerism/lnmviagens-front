import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  height: auto;
  padding: 100px;
  display: flex;
  flex-direction: column;  
  color: ${colors.primaryColor};
  h1{
    align-self: center;
    font-size: 28px;
    color: ${colors.primaryColor};
  }
`;

export const ImgContainer = styled.div`
  margin-top: 40px;
  height: 300px;
  width: 100%;
  display: flex;  
  overflow-x: scroll;
  img{
    width: 400px;
    margin-right: 30px;
  }
`;

export const LowerContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div{
    width: 48%;
    height: 500px;
    border: 1px solid rgba(25, 35, 57, 0.25);
    box-shadow: 0px 4px 24px rgba(25, 35, 57, 0.12);
    padding: 10px;
    h1{      
      color: ${colors.primaryColor};
      font-size: 28px;
    }
    ul{
      padding: 15px 30px;
      font-size: 18px;
      list-style-type: circle;
      li~li{
        margin-top: 10px;
      }
    }    
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;