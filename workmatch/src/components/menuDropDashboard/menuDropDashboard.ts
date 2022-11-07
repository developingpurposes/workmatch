import styled from "styled-components";
import "animate.css";

const UlMenuDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 10px;
  gap: 10px;
  border-radius: 7px;
  background-color: var(--color-bg-dashboard);
  z-index: 1;
  top: 90px;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 170px;
    gap: 10px;
    color: var(--color-6);
    font-size: 20px;
    align-self: center;

    svg {
      align-self: flex-start;
      min-width: 30px;
      min-height: 30px;
    }
  }
`;

export default UlMenuDropdown;
