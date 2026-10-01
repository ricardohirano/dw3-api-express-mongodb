import {useState} from "react";

const Formulario = () => {
    // criando os estados para os campos do formularios
    const [nome, setNome] = useState("")
    const [sobrenome, setSobreNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
//função que trata a submissao do formulario
    const handleSubmit = (evento) => {
//EVITANDO O COMPORTAMENTO PADRAO QUE E SER RECARREGADO
        evento.preventDefault();

        console.log("O formulario foi enviado!")
        console.log(nome,sobrenome, email,senha, confirmarSenha)
        if (confirmarSenha==senha){
            console.log("Senha Igual")
        }else{
            console.log("Senha diferente")
        }
    } 

    return (
    <>
    <h1>Cadastro de Usuario</h1>
    <br />
    <form onSubmit={handleSubmit}> {/*handleSumit é uma variavel que significa tratar submicao, pode ser qualquer nome mais a boa pratica fala pra nomear assim */}
        <input type="text" placeholder="Digite seu nome..."
        //quando o valor do input mudar, pegue um novo valor (evento.target.value) e atualize o estado com esse valor
        onChange={(evento) =>setNome(evento.target.value)}
        value={nome}
        />
        <br />
        <input type="text" placeholder="Digite seu sobrenome..."
        onChange={(evento) =>setSobreNome(evento.target.value)}
        value={sobrenome}
        />
        <br />
        <input type="email" placeholder="Digite seu email..." 
        onChange={(evento) =>setEmail(evento.target.value)}
        value={email}
        />
        <br />
        <input type="password" placeholder="Digite sua senha..." 
        onChange={(evento) =>setSenha(evento.target.value)}
        value={senha}
        />
        <br />
        <input type="password" placeholder="Confirmar sua senha..." 
        onChange={(evento) =>setConfirmarSenha(evento.target.value)}
        value={confirmarSenha}
        />
        <br />
        <br />
        <button type="submit">Cadastrar</button>
    </form>
    <h4>Chamando os estados para enxegar sus valores</h4>
    <p>{nome}</p>
    <p>{sobrenome}</p>
    <p>{email}</p>
    <p>{senha}</p>
    <p>{confirmarSenha}</p>
    </>
    )
}

export default Formulario;