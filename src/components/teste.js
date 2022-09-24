import { Letter, Title, Grid, Teste, Page, Imagem } from "./style";



export default function App() {
    const alfabeto = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];





    return (
        <Page>
            <Teste>
                <Imagem src="/assets/forca0.png" alt="Forca-Inicial" />
                <Title placeholder="Escolher Palavra"/>
            </Teste>
            <Grid>
                {alfabeto.map((props) =>
                    <Letter letra={props}>{props}</Letter>
                )}
            </Grid>
        </Page>

    )
}

/* function Imagem() {
    return <img src="/assets/forca0.png" alt="forca" />
} */



