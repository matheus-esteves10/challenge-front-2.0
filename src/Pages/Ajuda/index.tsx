import Header from '../../Components/Header'
import './style.css';

const Ajuda = () => {
    return (
        <>
        <Header></Header>
        <h1>Perguntas Frequentes</h1>
        <main className="conteudo">
            <div className="container">
            <div className="pergunta">
                <h2>Como funciona a identificação do problema do veículo?</h2>
            </div>
            <div className="resposta">
                <p>A inteligência artificial irá localizar o seu problema baseado na sua descrição por palavras ou por meio da identificação de luzes que indicam esses problemas no painel do carro (para a segunda alternativa é necessário o envio de foto no chat com a IA).</p>
            </div>
            </div>
            <div className="container">
            <div className="pergunta">
                <h2>Como é feito o orçamento?</h2>
            </div>
            <div className="resposta">
                <p>O orçamento é realizado por meio de uma padronização do preço de determinada peça para o determinado veículo. O orçamento foi definido por meio de pesquisas que levaram a essa média</p>
            </div>
            </div>
            <div className="container">
            <div className="pergunta">
                <h2>Como é o sistema de agendamento com oficinas mecânicas?</h2>
            </div>
            <div className="resposta">
                <p>Você informa qual é o seu endereço e encontraremos a oficina parceira disponível mais perto de você.</p>
            </div>
            </div>
        </main>
        <footer>
            <p>Ainda tem dúvidas?<br/>Adicione a Porto no WhatsApp e siga as orientações da nossa assistente virtual: <a id="fone" href="http://porto.vc/wpp29?_gl=1*12k1ulw*_ga*MTg0NjY5MDMzNS4xNzEyMDYyODM5*_ga_S9FTJ8D526*MTcxMjgzODgwOS42LjEuMTcxMjgzODgyMC40OS4wLjA." target="_blank">11 3003 9303</a></p>
        </footer>
        </>
    )
}

export default Ajuda;