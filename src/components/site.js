import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import novasPalavras from "./palavras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
let erros = 0;



function App() {
    const [start, setStart] = useState(false)
    const [botaozin, setBotaozin] = useState("")
    const [CheckWL, setCheckWL] = useState("lined")
    const [press, setLetter] = useState([])
    const [array, setArray] = useState([])
    const novoArray = [];
    const [choiceWord] = novasPalavras
    const [Try, setTry] = useState("")
    const estadoForca = { imagem: forcas[erros] }
    const palavraNormal = choiceWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    function Jogo(atributo) {
        for (let i = 0; i < palavraNormal.length; i++) {
            novoArray.push(palavraNormal[i]);
        }

        function IniciarJogo() {
            console.log(palavraNormal)
            ResetarJogo()
            let array = novoArray.map(() => ' _ ')
            setArray(array)
            if (!start) {
                setStart(true)
                setBotaozin("habilitado")
            }
        }
        function ResetarJogo() {
            
            setLetter([]);
            erros = 0;
            setCheckWL("lined")
        }
        function verificaLetra(letter) {
            setLetter([...press, letter])
            if (start) {
                if (press) {

                } else {
                    setLetter(true)
                }
                const arrayModificado = [...array]
                for (let i = 0; i < novoArray.length; i++) {
                    if (letter === novoArray[i]) {
                        arrayModificado[i] = choiceWord[i]

                    }
                }
                incrementaErro(arrayModificado, letter)
                setArray(arrayModificado)
                verificaCheckWL(arrayModificado)
            }
        }
        function incrementaErro(arrayModificado, letra) {
            if (!novoArray.includes(letra)) {
                erros++;
                verificaCheckWL(arrayModificado)
            }
        }

        function verificaCheckWL(arrayModificado, palavraInput) {
            if (!arrayModificado.includes(" _ ")) {    //ou palavra digitada no input for igual a choiceWord
                setCheckWL("lined verde")
                setStart(false)
                setBotaozin("")
            } else if (erros === 6) {
                setArray(choiceWord)
                setCheckWL("lined vermelho")
                setStart(false)
                setBotaozin("")
            }
        }


        function Alfabeto() {
            return (
                <ul className="listaButtons">
                    {alfabeto.map((props, key) => (
                        <li key={key}>
                            <button disabled={press.includes(props)} className={botaozin} onClick={() => verificaLetra(props)}>
                                <h3>{props.toUpperCase()}</h3>
                            </button>
                        </li>
                    ))}
                </ul>
            )
        }



        return (
            <div>
                <div className="Topo">
                    <div className="leftBox">
                        <img src={estadoForca.imagem} alt="forca inicial" />
                    </div>
                    <div className="rightBox">
                        <button onClick={() => IniciarJogo(atributo)}>
                            <span>Iniciar Jogo</span>
                        </button>
                        <div className={CheckWL}>{array}</div>
                    </div>
                </div>
                <Alfabeto />
            </div>

        )
    }

    function verificaCheckWLTry() {
        if (Try === choiceWord) {
            setArray(Try)
            setCheckWL("lined verde")
            setStart(false)
            setBotaozin("")
        } else {
            erros = 6;

            setArray(choiceWord)
            setCheckWL("lined vermelho")
            setStart(false)
            setBotaozin("")
        }
    }

    return (
        <div className="bodyLower">
            <Jogo />
            <div className="writing ">
                <h4>Ja sei a palavra!</h4>
                <input disabled={!start} type="text" placeholder="Tente acertar!" value={Try} onChange={e => setTry(e.target.value)} />
                <button disabled={!start} onClick={() => verificaCheckWLTry(Try)}>Chutar!</button>
            </div>
        </div>
    )
}

export default App