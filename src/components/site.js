import { useState } from "react";
import styled from "styled-components";
import novasPalavras from "./palavras";

const alfabeto = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default function Site() {

    const [mudar, setMudar] = useState("");
    const [word, setWord] = useState("")
    /* const [cont, setCont] = useState(0) */
    const [imagem, setImagem] = useState("/assets/forca0.png")

    function ChangeValue() {
        setImagem()
        if (mudar === word){
            alert("Voce conseguiu!")
        }
        console.log(mudar)

    }

    function changeWord() {
        const newWord = novasPalavras[0]
        setWord(newWord);
        console.log(newWord)

    }
/* 
    function RenderImage() {
        if (cont === 1) {
            const imagemNova = "/assets/forca1.png"
            setImagem(imagemNova)
        } else if (cont === 2) {
            const imagemNova = "/assets/forca2.png"
            setImagem(imagemNova)
        } else if (cont === 3) {
            const imagemNova = "/assets/forca3.png"
            setImagem(imagemNova)
        } else if (cont === 4) {
            const imagemNova = "/assets/forca4.png"
            setImagem(imagemNova)
        } else if (cont === 5) {
            const imagemNova = "/assets/forca5.png"
            setImagem(imagemNova)
        } else if (cont === 6) {
            const imagemNova = "/assets/forca6.png"
            setImagem(imagemNova)
        }

    } */

    return (
        <Page>
            <Teste>
                <Imagem src={imagem} alt="Forca-Inicial" />
                <div>
                    <ButtonTitle onClick={changeWord}>Escolher Palavra</ButtonTitle>
                    {word === novasPalavras[0] ? <Palavra>{word}</Palavra> : <Palavra></Palavra>}
                </div>


            </Teste>

            <Grid>
                {alfabeto.map((props, index) =>
                    <Letter key={index}>{props}</Letter>
                )}
            </Grid>
            <div>
                Já sei a palavra!
                <WordBox placeholder="Teste" value={mudar} onChange={e => setMudar(e.target.value)} />
                <WordButton onClick={ChangeValue}>Chute!</WordButton>
            </div>
        </Page>

    )

}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const Imagem = styled.img`
    height: 400px;
    width: 350px;
`

const ButtonTitle = styled.button`
    background-color: #32CD32;
    text-align: center;
    margin-top: 25px;
    height: 40px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #FFFF;
    & input::placeholder{
        color: #FAA;
    }

`;

const Teste = styled.div`
    display: flex;    
    justify-content: space-around;
    box-sizing: border-box;
    width: 40%;
    height: 500px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 35px);
    gap: 10px;
`

const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 35px;
    background-color: #9FAAB5;
    color: 	#86868A;
    border-radius: 2px;
    &:hover{
        background-color: #FAA;
    }
`

const WordBox = styled.input`
    border: 1px solid #9FAAB5;
    height: 25px;
    width: 250px;
    margin-top: 20px;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 10px;
    
    
`

const WordButton = styled.button`
    width: 60px;
    height: 30px;
    background-color: #9FAAB5;

`

const Palavra = styled.div`
    margin-top: 320px;
    letter-spacing: 5px;
    text-decoration: underline;
    font-size: 20px;
`
