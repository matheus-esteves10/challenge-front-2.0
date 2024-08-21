import styles from './Participantes.module.css'
import matheus from '../../assets/img/foto-matheus.jpg'
import caio from '../../assets/img/foto-caio.jpg'
import gabriel from '../../assets/img/foto-gabriel.jpg'
import github from '../../assets/img/github.png'
import Header from '../../Components/Header';

const Participantes = () => {
    return (
        <>
            <Header></Header>
            <main className={styles.conteudo}>
                <h1>Página de Integrantes</h1>
                <div className={styles.container}>
                    <img className={styles.foto} src={matheus} alt="Foto do Matheus" /> 
                    <div>
                        <p>Matheus Esteves</p>
                        <p>RM: 554769</p>
                        <p>Turma: 1TDSPZ</p>
                        <a href="https://github.com/matheus-esteves10" target="_blank"><img className={styles.github} src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.foto} src={caio} alt="Foto do Caio" /> 
                    <div>
                        <p>Caio Henrique</p>
                        <p>RM: 554600</p>
                        <p>Turma: 1TDSPJ</p>
                        <a href="https://github.com/caiohc28" target="_blank"><img className={styles.github} src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <div className={styles.container}>
                    <img className={styles.foto} src={gabriel} alt="Foto do Gabriel" /> 
                    <div>
                        <p>Gabriel Falanga</p>
                        <p>RM: 555061</p>
                        <p>Turma: 1TDSPM</p>
                        <a href="https://github.com/gabrielfalanga" target="_blank"><img className={styles.github} src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <a id={styles.linkRepo} href="https://github.com/matheus-esteves10/challenge-front-2.0" target="_blank">
                    <div className={styles.container} id={styles.containerLink}>
                        <p>Repositório no GitHub</p>
                    </div>
                </a>
            </main>
        </>
    )
}

export default Participantes;
