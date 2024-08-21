import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logo-porto.png';
import usuario from '../../assets/img/usuario.png';

const Header: React.FC = () => {
    return (
        <header className={styles.cabecalho}>
      <div>
        <a href="/">
          <img id={styles.logo} src={logo} alt="Logo da Porto" />
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

      <div id={styles.divImgUsuario}>
        <a href="/login">
          <img id={styles.imgUsuario} src={usuario} alt="Imagem de Pessoa representando o Usuário"/>
        </a>
      </div>
    </header>
    )
}

export default Header;