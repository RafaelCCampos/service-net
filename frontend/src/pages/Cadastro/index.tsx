import Form from "../../components/Form"
import Header from "../../components/Header"
import landingTop from '../../assets/images/landing-top.svg';
import { Container } from "@material-ui/core";

import './styles.scss';

const Cadastro = () => {

    return (
        <>
            <Header/>
            <div className="cadastroContainer">
                <Container className="cadastroTop">
                    <div className="cadastroText">
                        <h1>CADASTRO</h1>
                        <p>REALIZE SEU CADASTRO E DIVULGUE SEUS SERVIÇOS</p>
                    </div>
                    <img src={landingTop} width="500px" alt="Prestadores de serviço"/>
                </Container>
                <Form/>
            </div>
        </>
    )
}

export default Cadastro;