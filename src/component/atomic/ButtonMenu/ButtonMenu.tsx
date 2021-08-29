import styled from "styled-components";
import { blue, grey } from "@material-ui/core/colors";

const ButtonMenu = styled.button<{ isActive: boolean }>`
  width: 100%;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: medium;
  word-break: break-all;
  display: inline-flex;
  background-color: ${(props) => (props.isActive ? blue[50] : "white")};
  color: ${(props) => (props.isActive ? blue[900] : grey[600])};
  &:hover {
    background-color: ${(props) => (props.isActive ? blue[50] : grey[50])};
    color: ${grey[900]};
  }

  span:nth-child(-n + 2) {
    margin-right: 1rem;
  }
`;

export default ButtonMenu;
