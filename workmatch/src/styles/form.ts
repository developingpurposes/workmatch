import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  gap: 5px;


  &:focus-within{
    color: beige;
  }


  label {
    color: var(--color-6);
    align-self: baseline;
    font: var(--label);
  }


  label:focus-within{
    color: var(--color-4);
  }


  input {
    width: 95%;
    padding: 12px;
    
    color: var(--color-6);
    background-color: var(--color-bg-input);

    border: 2.5px solid var(--color-6);

    border-radius: 8px;
    
  }

  input::placeholder{
    color: aliceblue;
  }

  input:focus{
    border: 2.5px solid var(--color-4);
    background-color: var(--color-bg-focus-input);
    font-weight: var(--font-weigth-1);

  }

  button {
    background-color: var(--color-4);
    color: var(--color-6);

    width: 100%;
    height: 40px;

   
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font:var(--text-button);
    
    margin-top: 30px;
    margin-bottom: 20px;
  }

  button:hover , button:active {   
    filter: brightness(0.9);
    color: var(--color-6); 
  }
`;

export default Form;
