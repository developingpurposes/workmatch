import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 450px;
  height: 450px;

  padding-top: 5px;

  label {
    color: var(--color-6);
    margin: 0 0 7px 15px;
  }

  input {
    margin: 0 0 10px 10px;

    height: 35px;
    width: 90%;

    color: var(--color-6);
    background-color: var(--color-3);
    border: 1.5px solid var(--color-6);
    border-radius: 15px;

    padding-left: 15px;
  }

  button {
    background-color: var(--color-4);
    color: var(--color-6);

    height: 40px;
    width: 300px;

    border: none;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font-size: 20px;

    margin: 15px auto;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--color-5);
    color: var(--color-4);
  }
`;

export default Form;
