import './style.css';
import robo from '../assets/img/robo-autocare.png'

const Home = () => {
    return(
        <>
        <main className="conteudo">
      <h1>O que o <strong>AutoCare</strong> faz?</h1>

      <section className="flex-section">
        <div className="boxes">
          <div className="box box1">
            <p>Identificação do problema do seu veículo</p>
          </div>
          <div className="box box2">
            <p>Orçamento aproximado de peças e serviços</p>
          </div>
          <div className="box box3">
            <p>Agendamento com oficinas próximas de você</p>
          </div>
        </div>
        <a href="./7-pagina-utilizacao/utlilizacao.html">
          <div className="box-botao">
            <p>Experimente o Serviço</p>
          </div>
        </a>
      </section>

    </main>
    <img id="background" src={robo} alt="Robô do background"></img>
        </>
    )
}

export default Home;