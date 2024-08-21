import robo from '../../assets/img/robo-autocare.png';
import Header from '../../Components/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.conteudo}>
        <h1>
          O que o <strong>AutoCare</strong> faz?
        </h1>

        <section className={styles.flexSection}>
          <div className={styles.boxes}>
            <div className={`${styles.box} ${styles.box1}`}>
              <p>Identificação do problema do seu veículo</p>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <p>Orçamento aproximado de peças e serviços</p>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <p>Agendamento com oficinas próximas de você</p>
            </div>
          </div>
          <a href="/utilizacao">
            <div className={styles.boxBotao}>
              <p>Experimente o Serviço</p>
            </div>
          </a>
        </section>
      </main>
      <img id={styles.background} src={robo} alt="Robô do background" />
    </>
  );
};

export default Home;
