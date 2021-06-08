import { FormEvent } from "react";
import Form from "../../components/Form"
import Header from "../../components/Header"
import landingTop from '../../assets/images/landing-top.svg';
import { Container } from "@material-ui/core";
import { Person } from "../../types/cadastro";

import './styles.scss';
import api from "../../services/api";

const Cadastro = () => {

    const onSubmit = (event: FormEvent, user: Person) => {
        event.preventDefault();
        
        api.post('/persons', {
            nome: user.nome,
            endereco: user.endereco,
            telefone: user.telefone,
            email: user.email,
            senha: user.senha
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
        }).catch(() => {
            alert('Erro ao realizar cadastro!')
        })
    }

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
                <Form userSubmit={onSubmit}/>
            </div>
        </>
    )
}

export default Cadastro;