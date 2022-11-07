import styled from "styled-components";

export const ContainerModal = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
  `;

    export const DivModal = styled.div`
    width: 80%;
    height: min-content;
    background-color: var(--color-1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 20px;
    height: min-content;
    flex-direction: column;
    align-self: center;
    border-radius: 5px;

    @media (min-width: 900px){
        width: 50%;
    }
    `;

    export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    align-items: center;
    
    img{
        width: 60%;
        height: 120px;
    }

    label{
        font-size: var(--font-size-5);
        color: white;
        align-self: baseline;
    }

    input{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px splid var(--color-6);
    }
    `;

    export const TitleModal = styled.div `
    display: flex;
    width: 95%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
    padding: 5px;
    height: min-content;
    color: var(--color-6);

    button{
        background-color: var(--color-1);
        color: var(--color-6);
    }
    `;

    export const DivInputCheckbox = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    `;

    export const ButtonCreate = styled.button `
    background-color: var(--color-4);
    color: var(--color-6);

    width: 100%;
    height: 40px;

   
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font:var(--text-button);
    
    margin-top: 30px;
    margin-bottom: 20px;
    `;