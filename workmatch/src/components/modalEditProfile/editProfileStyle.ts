import styled from "styled-components";
const EditProfileStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;

  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    background-color: #100325;
    position: absolute;
    z-index: 2;
    top: 1px;
    margin: 10px 0;
    padding: 0px 18px;
    border-radius: 5px;
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .section__container {
      width: 95%;
      height: 50px;
      padding: 0 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 5px;

      h3 {
        color: var(--color-6);
        font-weight: 700;
        font-size: var(--font-size-4);
        margin-left: 5px;
        font-family: var(--font-df);
      }
      span {
        color: var(--color-4);
        font-size: var(--font-size-4);
        margin-right: 5px;
        font-family: var(--font-df);
        cursor: pointer;
      }
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
    }

    p {
      color: var(--color-6);
      font-size: var(--font-size-5);
      font-family: var(--font-df);
      margin: 10px 0 15px 0;
    }
  }

  input {
    width: 90%;
    padding: 8px;
    color: var(--color-6);
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
  }

  input::placeholder {
    color: aliceblue;
    opacity: 0.7;
  }
  #SelectStyle {
    width: 95%;
    max-width: 394px;
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
    div {
      font-size: 14px;
      font-family: var(--font-df);
      color: var(--color-6);
      background-color: #24163e40;
      border: none;
      border-radius: 8px;
    }
  }
  select {
    width: 95%;
    padding: 8px;
    color: var(--color-6);
    opacity: 0.7;
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;

    option {
      color: var(--color-1);
      background-color: var(--color-6);
    }
  }

  @media (min-width: 767px) {
    section {
      width: 430px;
    }
  }
`;
export default EditProfileStyle;
