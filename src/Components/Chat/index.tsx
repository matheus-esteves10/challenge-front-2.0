import { useState, useEffect, useRef } from 'react';
import Mensagem from '../Mensagem';
import { MensagemProps } from '../../interfaces';
import styles from "./Chat.module.css";
import robo from '../../assets/img/robo-autocare.png'

const Chat = () => {
    const [chatFoiIniciado, setChatFoiIniciado] = useState(false); 
    const [inputValue, setInputValue] = useState('');
    const [mensagens, setMensagens] = useState<MensagemProps[]>([]);

    const divMensagensRef = useRef<HTMLDivElement>(null); // Referência para a div que contém as mensagens
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSend = () => {
      if (inputValue.length == 0) {
          return
      }

      if (!chatFoiIniciado) {
          setChatFoiIniciado(!chatFoiIniciado);
      }
      const backendUrl = "http://127.0.0.1:5000/classificar";
      const input = inputValue;
  
      // Adiciona a mensagem do usuário à lista de mensagens
      setMensagens([...mensagens, { texto: inputValue, isResponse: false }]);
  
      fetch(backendUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input }),
      })
      .then(response => response.json())
      .then(data => {
          // Adiciona a resposta da API à lista de mensagens
          setMensagens([...mensagens, { texto: inputValue, isResponse: false }, { texto: data.response, isResponse: true }]);
      })
      .catch(error => console.error('Erro:', error));
  
      setInputValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    // UseEffect para rolar automaticamente para o final quando as mensagens forem atualizadas
    useEffect(() => {
      if (divMensagensRef.current) {
          divMensagensRef.current.scrollTop = divMensagensRef.current.scrollHeight;
      }
  }, [mensagens]); // Roda sempre que o estado de mensagens mudar
  
    return (
      <div className={styles.container}>
        <div className={chatFoiIniciado ? styles.displayNone : styles.inicioChat}>
            <h1>Auto<b>Care</b></h1>
            <img src={robo} alt="Imagem de carro robô" />
        </div>
        <div ref={divMensagensRef} className={chatFoiIniciado ? styles.divMensagens : styles.displayNone}>
          {mensagens.map((mensagem, index) => (
            <Mensagem key={index} texto={mensagem.texto} isResponse={mensagem.isResponse} />
          ))}
        </div>
        <div className={styles.divInput}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Descreva a situação detalhadamente..." 
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    );
};
  
export default Chat;