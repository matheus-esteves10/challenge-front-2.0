import './style.css';
import logo from '../../assets/img/logo-porto.png';

const Cadastro = () => {
    return (
        <>
            <div className='cabecalho'>
                <a href="/">
                    <img id="logo" src={logo} alt="Logo da Porto" />
                </a>
            </div>
            <div className="box-cadastro">
                <h1>Crie sua conta Porto</h1>
                <form>
                    <label htmlFor="nome">Nome:</label><br />
                    <input type="text" id="nome" name="nome" /><br />

                    <label htmlFor="data_nascimento">Data de nascimento:</label><br />
                    <input type="date" id="data_nascimento" name="data_nascimento" /><br />

                    <label htmlFor="cpf">CPF:</label><br />
                    <input type="text" id="cpf" name="cpf" /><br />

                    <label htmlFor="veiculo">Veículo:</label><br />
                    <select id="veiculo" name="veiculo">
                        <option value="">Selecione um veículo</option>
                        <option value="carro1">Carro1</option>
                        <option value="carro2">Carro2</option>
                        <option value="carro3">Carro3</option>
                        <option value="carro4">Carro4</option>
                        <option value="carro5">Carro5</option>
                    </select><br />

                    <label htmlFor="email">E-mail:</label><br />
                    <input type="email" id="email" name="email" /><br />

                    <label htmlFor="senha">Senha:</label><br />
                    <input type="password" id="senha" name="senha" /><br />

                    <label htmlFor="confirmar_senha">Confirme sua senha:</label><br />
                    <input type="password" id="confirmar_senha" name="confirmar_senha" /><br />

                    <input type="submit" value="Cadastre-se" />
                </form>
            </div>
        </>
    );
}

export default Cadastro;