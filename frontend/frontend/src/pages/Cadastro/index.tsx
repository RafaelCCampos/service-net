import Form from "../../components/Form"
import Header from "../../components/Header"
import landingTop from '../../assets/images/landing-top.svg';
import './styles.scss';
import { Container } from "@material-ui/core";
import { FormEvent, useState } from "react";
import { Person } from "../../types/cadastro";
import api from "../../services/api";

const Cadastro = () => {
    
    const blankUser: Person = {
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        senha: '',
    }

    const [user, setUser] = useState<Person>(blankUser)

    const submitForm = ( person: Person) => {
        //event.preventDefault();
        api.post('/persons',person)
        .then(() => {
                alert("Cadastro efetuado com sucesso!")
        }).catch(() => {
            alert("Erro no cadastro!")
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
                <Form
                    userSubmit={submitForm}
                />
            </div>
        </>
    )
}

export default Cadastro;