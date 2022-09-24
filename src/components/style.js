import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Imagem = styled.img`
    height: 400px;
    width: 300px;
`

export const Title = styled.input`
    background-color: #32CD32;
    text-align: center;
    height: 50px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

`;

export const Teste = styled.div`
    display: flex;    
    justify-content: space-around;
    box-sizing: border-box;
    width: 50%;
    height: 500px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 35px);
    gap: 10px;
`

export const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 35px;
    background-color: #9FAAB5;
    color: 	#86868A;
    border-radius: 2px;
`
