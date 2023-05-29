import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  padding: 60px 0;
  height: calc(100vh);
  display: flex;
`;

export const Filter = styled.aside`
  width: 200px;
  height: 100%;
  border-right: 2px solid rgba(25, 35, 57, 0.25);
  padding-top: 40px;
`;

export const Form = styled.form`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input{
    width: 180px;
  }
  div{
    display: flex;
    justify-content: space-between;
    padding: 0 10% 0 2%;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 60px;
  border: 1px solid rgba(25, 35, 57, 0.25);
  box-shadow: 0px 4px 24px rgba(25, 35, 57, 0.12);
  border-radius: 12px;
  background: ${colors.primaryColor};
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
`;

export const RightContainer = styled.section`
  padding: 60px 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1{
    font-size: 28px;
    color: ${colors.primaryColor};
  }
`;

export const HotelsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Hotel = styled.div`
  width: 200px;
  height: 275px;
  border: 1px solid rgba(25, 35, 57, 0.25);
  box-shadow: 0px 4px 24px rgba(25, 35, 57, 0.12);
  margin-top: 40px;
  margin-right: 20px;  
  overflow: hidden;
  img{
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  div{
    height:70px ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p{
      font-size: 16px;
    }
  }
`;

export const Select = styled.select`
  width: 90%;
  height: 30px;  
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