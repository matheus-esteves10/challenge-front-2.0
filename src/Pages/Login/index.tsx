import styles from './Login.module.css';
import usuario from '../../assets/img/usuario.png';
import senha from '../../assets/img/cadeado.png'
import logo from '../../assets/img/logo-porto.png'

const Login = () => {
    return (
        <>
            <div className={styles.cabecalho}>
                <a href="/">
                <img id={styles.logo} src={logo} alt="Logo da Porto" />
                </a>
            </div>
            <div className={styles.boxCadastro}>
                <h1>Faça o Login na sua Conta Porto</h1>
                <form>
                    <label htmlFor="cpf">CPF</label><br />
                    <input type="text" id="cpf" name="cpf" /><br />

                    <label htmlFor="senha">Senha</label><br />
                    <input type="password" name="senha" id="senha" /><br />
                    
                    <input type="submit" value="Login" />
                </form>
                <p id={styles.textoCadastro}>Ainda não é cliente Porto? <br />
                    <a className={styles.link} href="/cadastro">Cadastre-se</a>
                </p>
                <img className={styles.imgUser} src={usuario} alt="Ícone de usuário" />
                <img className={styles.imgPassword} src={senha} alt="Ícone de cadeado" />
            </div>
        </>
    )
}

export default Login;
