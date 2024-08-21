import './style.css';
import usuario from '../../assets/img/usuario.png';
import senha from '../../assets/img/cadeado.png'
import logo from '../../assets/img/logo-porto.png'

const Login = () => {
    return (
        <>
            <div className='cabecalho'>
                <a href="../index.html">
                <img id="logo" src={logo} alt="Logo da Porto" />
                </a>
            </div>
            <div className="box-cadastro">
                <h1>Faça o Login na sua Conta Porto</h1>
                <form>
                    <label htmlFor="cpf">CPF</label><br />
                    <input type="text" id="cpf" name="cpf" /><br />

                    <label htmlFor="senha">Senha</label><br />
                    <input type="password" name="senha" id="senha" /><br />
                    
                    <input type="submit" value="Login" />
                </form>
                <p id="texto-cadastro">Ainda não é cliente Porto? <br />
                    <a className="link" href="/cadastro">Cadastre-se</a>
                </p>
                <img className="img-user" src={usuario} alt="Ícone de usuário" />
                <img className="img-password" src={senha} alt="Ícone de cadeado" />
            </div>
        </>
    )
}

export default Login;
