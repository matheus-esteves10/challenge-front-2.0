import styles from './Utilizacao.module.css';
import Chat from '../../Components/Chat';
import Header from '../../Components/Header';

const Utilizacao = () => {

    return (
        <>
            <Header />
            <section className={styles.container}>
                <Chat />
            </section>
            
        </>
    );
}

export default Utilizacao;