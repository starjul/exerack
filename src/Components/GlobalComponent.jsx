import styled from "styled-components";

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin || "24px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  @media only screen and (max-width: 820px) {
    margin: 0 20px;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "auto"};
  margin: 0;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
  border: ${(props) => props.border || "1px solid"};
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor || "#FF5F36"};
  color: ${(props) => props.color || "#ffffff"};
  font-weight: 600;
  align-items: center;
`;

// Card
export const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  width: ${(props) => props.width || "98%"};
  height: ${(props) => props.height || "auto"};
  margin-bottom: 18px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

// Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: ${(props) => props.width || "94%"};
  max-width: 560px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

// Pop ups
export const Popup = styled.div`
  z-index: 1;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
