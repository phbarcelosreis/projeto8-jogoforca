import { Title } from "./style";
import { Teste } from "./style";

export default function App(){
    return (
        <Teste>
            <Imagem/>
            <Title>oi</Title>
        </Teste>
    )
}

function Imagem(){
    return <img src="/assets/forca0.png" alt="forca"/>
}



