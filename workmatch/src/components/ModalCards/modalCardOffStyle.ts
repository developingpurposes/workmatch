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
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 25px;
    height: min-content;
    flex-direction: column;
    align-self: center;
    border-radius: 5px;

    @media (min-width: 700px){
        width: 50%;
    }

    @media (min-width: 1100px){
        width: 35%;
    }

    .container{
        background-color: var(--color-6);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        align-items: center;
        padding: 20px;
        gap: 5px;
        border-radius: 5px;

        h2{
            font-size: var(--font-size-2);
            color: var(--gray-1);
            width: 80%;
        }
        
        .startButton{
            background-color: var(--color-4);
            padding: 5px 10px;
            color: white;
            border: none;
            cursor: pointer;
            width: 80%;
            margin-top: 10px;
            border-radius: 3px;
        }
    }

`;