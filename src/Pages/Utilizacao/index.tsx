import './style.css';
import robo from '../../assets/img/robo-autocare.png'
import logo from '../../assets/img/logo-porto.png'

export default function Utilizacao() {
    return (
        <>
            <div className="container">
                <header className="cabecalho">
                    <div>
                        <a href="../index.html">
                            <img id="logo" src={logo} alt="Logo da Porto" />
                        </a>
                    </div>
                </header>
                <section className="titulo">
                    <h2>Bem-vindo ao AutoCare</h2>
                </section>
                <section className="pagina">
                    <img src={robo} alt="Robo Do AutoCare" />
                    <div className="texto-explicacao">
                        <p>Para iniciar a utilização do serviço, clique no círculo preto no canto inferior direito de sua página.</p>
                    </div>
                </section>
            </div>

            <script>
                {`window.watsonAssistantChatOptions = {
                    integrationID: "a505dc30-6f4e-4842-9864-40ab60151014", // The ID of this integration.
                    region: "us-south", // The region your integration is hosted in.
                    serviceInstanceID in WatsonAssistantChatOptions. = "e3dce560-91a0-402f-a2fb-e6f374cf4d3e", // The ID of your service instance.
                    onLoad: async (instance) => { await instance.render(); }
                };
                setTimeout(function(){
                    const t=document.createElement('script');
                    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
                    document.head.appendChild</ t);
                });`}
            </script>
        </>
    );
}
