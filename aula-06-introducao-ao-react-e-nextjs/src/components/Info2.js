//Importando o hook use state : permite criar estados para os componentes
import {useState} from "react"
const Info2 = () =>{
    //Criando um estado para o Componente
    // contagem : nome do estado
    //setContafem: funçãp que açtera o valor do estado
    // useState() : valor inicial do estado
    const [passagem, setPassagem] = useState(0);
    const info = ["Ricardo","Registro","37"]
    return(
        <>
            <div>
                <p> {info[passagem]}</p>
                <button onClick={() =>{setPassagem(passagem+1)}}>Mudar</button>
                
            </div>
        </>
    )
}
export default Info2;