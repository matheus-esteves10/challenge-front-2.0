import React from 'react';
import './style.css';
import logo from '../../assets/img/logo-porto.png';
import usuario from '../../assets/img/usuario.png';

const Header: React.FC = () => {
    return (
        <header className="cabecalho">
      <div>
        <a href="/">
          <img id="logo" src={logo} alt="Logo da Porto" />
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/sobre">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="/ajuda">
              Ajuda
            </a>
          </li>
          <li>
            <a href="/participantes">
              Participantes
            </a>
          </li>
        </ul>
      </nav>

      <div id="div-img-usuario">
        <a href="/login">
          <img id="img-usuario" src={usuario} alt="Imagem de Pessoa representando o Usuário"/>
        </a>
      </div>
    </header>
    )
}

export default Header;