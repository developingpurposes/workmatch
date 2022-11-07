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
    padding: 20px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
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
    }

    p {
      color: var(--color-6);
      font-size: var(--font-size-5);
      font-family: var(--font-df);
      margin: 10px 0 15px 0;
    }
  }

  input {
    margin-bottom: 10px;
  }

  @media (min-width: 767px) {
    section {
      width: 40%;
    }
  }
`;
export default EditProfileStyle;
