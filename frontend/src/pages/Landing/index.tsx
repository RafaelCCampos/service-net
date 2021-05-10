import Header from '../../components/Header';
import Logo from '../../components/Logo';
import landingTop from '../../assets/images/landing-top.svg';
import landingBottom from '../../assets/images/landing-bottom.svg';
import './styles.scss'
;
function Landing() {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="landing-top">
                    <img src={landingTop} alt="Trabalhadores de reformas"/>
                    <Logo/>
                </div >
                <div className="landing-text">
                    <h2>O que é Service Net?</h2>
                    <p>No Service Net você poderá contratar profissionais para serviços em geral, como serviços de limpeza,
                    mão de obra, mudanças, entre outros. Basta realizar uma busca do serviço desejado e a cidade em que 
                    se localiza ou se cadastrar em nosso site para receber notificações de serviços próximo a você!</p>
                </div>
                <img src={landingBottom} alt="Prestadores de serviços de limpeza"/>
            </div>
        </div>
    );
}

export default Landing;
