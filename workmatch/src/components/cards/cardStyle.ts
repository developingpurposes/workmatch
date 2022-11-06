import styled from "styled-components";


export const Card = styled.li`
    width: 250px;
    min-width: 250px;
    background-color: var(--color-6);
    margin-bottom: 50px;
    height: min-content;
    border-radius: 5px;

    img{
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .containerText{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        h2{
            font-size: var(--font-size-3);
        }
        h3{
            font-size: var(--font-size-3);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: pre-wrap;
            max-height: 20px;
        }
        
        .divTechs{
            display: flex;
            justify-content: flex-start;
            p{
                font-size: var(--font-size-3);
                margin-right: 10px;
            }

            img{
                width: 20px;
                height: 20px;
            }
        }

       
    }
`;

export const ContainerButton = styled.div`
            display: flex;
            width: 80%;
            justify-content: space-between;
            align-self: center;
            button{
                background-color: var(--color-4);
                padding: 5px 10px;
                color: white;
                border: none;
                cursor: pointer;
            }
`;
    export const ContainerImgTeam = styled.ul`
        display: flex;
        gap: 3px;
        height: min-content;
        padding: 5px;
        margin: 0;
            .imgTeam{
                width: 50px;
                height: 50px;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
`;