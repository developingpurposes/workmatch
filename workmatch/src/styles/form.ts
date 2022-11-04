import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-self: center;
  align-items: center;

  gap: 5px;


  label {
    color: var(--color-6);
    align-self: baseline;
    font-family: var(--font-df);
  }

  input {

    height: 35px;
    width: 100%;

    color: var(--color-6);
    background-color: transparent;

    border: 2.5px solid var(--color-6);
    border-radius: 15px;
    margin-bottom: 3px;

  }

  button {
    background-color: var(--color-4);
    color: var(--color-6);

    height: 40px;
    width: 100%;

    border: none;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font-size: 20px;
    font-family: var(--font-df);
    font-weight: var(--font-weigth-1);

    margin-top: 30px;
    margin-bottom: 20px;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--color-5);
    color: var(--color-4);
  }

`;

export default Form;
