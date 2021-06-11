import { FormEvent } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { Container } from "@material-ui/core";
import { Person } from "../../types/cadastro";

import './styles.scss';
import api from "../../services/api";

type Props = {
    userId: string;
}

const UserEdit = ({userId}: Props) => {

    const onSubmit = (event: FormEvent, user: Person) => {
        event.preventDefault();
        
        api.put(`/persons/${user.id}`, {
            nome: user.nome,
            endereco: user.endereco,
            telefone: user.telefone,
            email: user.email,
            senha: user.senha
        }).then(() => {
            alert('Cadastro editado com sucesso!')
        }).catch(() => {
            alert('Erro ao editar o cadastro!')
        })
    }

    return (
        <>
            <Header/>
            <div className="userEditContainer">
                <Container className="userEditTop">
                    <div className="userEditText">
                        <h1>EDIÇÃO</h1>
                        <p>Cadastro de usuários</p>
                    </div>
                </Container>
                <Form userSubmit={onSubmit} userId={userId}/>
            </div>
        </>
    )
}

export default UserEdit;