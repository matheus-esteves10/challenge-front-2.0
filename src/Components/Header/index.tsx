import React from 'react';
import styles from './Header.module.css';
import usuario from '../../assets/img/usuario.png';

const Header: React.FC = () => {
    return (
      <header className={styles.cabecalho}>
        <div className={styles.divLogo}>
          <a href="/">
            <h1>Auto<b>Care</b></h1>
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