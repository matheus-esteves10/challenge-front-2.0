import './style.css';
import matheus from '../assets/img/foto-matheus.jpg'
import caio from '../assets/img/foto-caio.jpg'
import gabriel from '../assets/img/foto-gabriel.jpg'
import github from '../assets/img/github.png'

const Participantes = () => {
    return (
        <>
            <main className="conteudo">
                <h1>Página de Integrantes</h1>
                <div className="container">
                    <img className="foto" src={matheus} alt="Foto do Matheus" /> 
                    <div>
                        <p>Matheus Esteves</p>
                        <p>RM: 554769</p>
                        <p>Turma: 1TDSPZ</p>
                        <a href="https://github.com/matheus-esteves10" target="_blank"><img className="github" src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <div className="container">
                    <img className="foto" src={caio} alt="Foto do Caio" /> 
                    <div>
                        <p>Caio Henrique</p>
                        <p>RM: 554600</p>
                        <p>Turma: 1TDSPJ</p>
                        <a href="https://github.com/caiohc28" target="_blank"><img className="github" src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <div className="container">
                    <img className="foto" src={gabriel} alt="Foto do Gabriel" /> 
                    <div>
                        <p>Gabriel Falanga</p>
                        <p>RM: 555061</p>
                        <p>Turma: 1TDSPM</p>
                        <a href="https://github.com/gabrielfalanga" target="_blank"><img className="github" src={github} alt="Logo do GitHub" /></a> 
                    </div>
                </div>
                <a id="link-repo" href="https://github.com/matheus-esteves10/challenge2024-frontend.git" target="_blank">
                    <div className="container" id="container-link">
                        <p>Repositório no GitHub</p>
                    </div>
                </a>
            </main>
        </>
    )
}

export default Participantes;
