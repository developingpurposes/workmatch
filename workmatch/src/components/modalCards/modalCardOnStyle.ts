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

export const TitleModal = styled.div `
    display: flex;
    width: 95%;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
    padding: 5px;
    height: min-content;
    
    h2{
        font-size: var(--font-size-1);
        color: var(--color-6);
    }
    
    button{
        border: none;
        background-color: var(--color-1);
        color: var(--color-6);
        border-radius: 3px;
    }
`;

export const DivModal = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: var(--color-1);
    align-self: center;
    padding: 0px 15px;
    border-radius: 0px 0px 5px 5px;
    
    ul{
        align-self: center;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        width: 90%;
        gap: 10px;
        //deixa o scroll invisivel. Tem que clicar na lista e usar o teclado pra rolar.
        ::-webkit-scrollbar {
        display: none;
}
    }
`;