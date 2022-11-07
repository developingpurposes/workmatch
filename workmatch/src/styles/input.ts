import styled from "styled-components";

interface IIpunt{
     padding: number;
     width: number;
}

const Input = styled.input<IIpunt>`
     width: 100%;
     padding: ${props => props.padding}px;
     color: var(--color-6);
     background-color: var(--color-bg-input);
     border: 2.5px solid var(--color-6);
     border-radius: 8px;

     &::placeholder{
          color: var(--color-6);
     }

     &:focus{
          border: 2.5px solid var(--color-4);
          background-color: var(--color-bg-focus-input);
          font-weight: var(--font-weigth-1);

     } 
`

export default Input