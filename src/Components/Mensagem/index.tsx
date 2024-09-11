import { MensagemProps } from "../../interfaces";
import styles from "./Mensagem.module.css";

const Mensagem = ({ texto, isResponse }: MensagemProps) => {
    return (
        <div className={isResponse ? styles.resposta : styles.entrada}>
            <p className={styles.texto}>{texto}</p>
        </div>
    );
};

export default Mensagem;