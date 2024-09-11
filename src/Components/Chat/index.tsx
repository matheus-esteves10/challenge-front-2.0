import { useState, useEffect, useRef } from 'react';
import Mensagem from '../Mensagem';
import { MensagemProps } from '../../interfaces';
import styles from "./Chat.module.css";
import robo from '../../assets/img/robo-autocare.png'

const Chat = () => {
    const [chatFoiIniciado, setChatFoiIniciado] = useState(false); 
    const [foiClassificado, setFoiClassificado] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [mensagens, setMensagens] = useState<MensagemProps[]>([]);
    
    const [tipoProblema, setTipoProblema] = useState('nao_identificado');
    
    const divMensagensRef = useRef<HTMLDivElement>(null); // Referência para a div que contém as mensagens
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSend = () => {
      const input = inputValue;
      // Se o input estiver vazio, retorna
      if (input.length == 0) {
          return
      }
      // Inicia o chat
      if (!chatFoiIniciado) {
          setChatFoiIniciado(!chatFoiIniciado);
      }

      if (!foiClassificado) {
        const backendUrl = "http://127.0.0.1:5000/classificar";
        // Adiciona a mensagem do usuário à lista de mensagens
        setMensagens(prevMensagens => [...prevMensagens, { texto: inputValue, isResponse: false }]);
        setInputValue('');
        
        // Envia o input para a API
        fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
        })
        // Recebe a resposta da API
        .then(response => response.json())
        // Processa os dados recebidos
        .then(data => {
            // Adiciona a resposta da API à lista de mensagens e limpa o campo de input
            setMensagens(prevMensagens => [...prevMensagens, { texto: data.response, isResponse: true }]);

            // Se o problema foi identificado, faz o orçamento
            if (data.tipo != 'nao_identificado') {
              setFoiClassificado(true);
              setMensagens(prevMensagens => [...prevMensagens, 
                { texto: data.servico, isResponse: true }, 
                { texto: 'Gostaria de agendar?', isResponse: true }
              ]);
            } 
        })
        .catch(error => console.error('Erro:', error));
      
      // Se foi classificado
      } else {
        setMensagens(prevMensagens => [...prevMensagens, { texto: input, isResponse: false }]);
        setInputValue('');
        if (input.toLowerCase() === 'não' || input.toLowerCase() === 'nao' || input.toLowerCase() === 'n') {
          setMensagens(prevMensagens => [...prevMensagens, { texto: 'Sem problemas... estou aqui sempre que precisar. Boa sorte!', isResponse: true }]);
          setFoiClassificado(false);
        } else {
          // Busca oficinas na API
          let backendUrl = "http://127.0.0.1:5000/buscar-oficinas";
          fetch(backendUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => {
            const oficinasDisponiveis = data.oficinas
            const oficinasTexto = oficinasDisponiveis.map((oficina: string) => `${oficina}`).join(' | ');
            const novaMensagem = {
              texto: `Oficinas disponíveis:\n\n ${oficinasTexto}`,
              isResponse: true
            };
            setMensagens(prevMensagens => [...prevMensagens, novaMensagem]);
          })
          .catch(error => {
            console.error('Error:', error);
          });

          // Busca datas na API
          backendUrl = "http://127.0.0.1:5000/buscar-datas";
          fetch(backendUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => {
            const datasDisponiveis = data.datas
            const datasTexto = datasDisponiveis.map((data: string) => `${data}`).join(' | ');
            const novaMensagem = {
              texto: `Datas disponíveis:\n\n ${datasTexto}`,
              isResponse: true
            };
            setMensagens(prevMensagens => [...prevMensagens, novaMensagem]);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        }
      }
    };

    // Envia a mensagem ao teclar Enter
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