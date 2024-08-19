import React from 'react';
import './style.css';
import logo from '../../assets/img/logo-porto.png';
import usuario from '../../assets/img/usuario.png';

const Header: React.FC = () => {
    return (
        <header className="cabecalho">
      <div>
        <a href="./index.html">
          <img id="logo" src={logo} alt="Logo da Porto" />
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="./2-pagina-sobre-nos/sobre-nos.html">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="./3-pagina-ajuda/ajuda.html">
              Ajuda
            </a>
          </li>
          <li>
            <a href="./4-pagina-participantes/participantes.html">
              Participantes
            </a>
          </li>
        </ul>
      </nav>

      <div id="div-img-usuario">
        <a href="./5-pagina-login/login.html">
          <img id="img-usuario" src={usuario} alt="Imagem de Pessoa representando o Usuário"/>
        </a>
      </div>
    </header>
    )
}

export default Header;