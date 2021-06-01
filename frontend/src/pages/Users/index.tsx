import { useEffect, useState } from "react";
import { Person } from "../../types/cadastro";

import api from "../../services/api";
import { Container } from "@material-ui/core";
import Header from "../../components/Header";

import './styles.scss';

const Users = () => {

    const [users, setUsers] = useState<Array<Person>>([]);

    useEffect( () => {
         api.get('/persons')
        .then(response => {
            setUsers(response.data)
        })
    },[])

    return (
        <>
            <Header/>
            <div className="usersContainer">
                <h1>Usuários</h1>
                <Container className="table-responsive">
                    <table className="table table-striped table-sm border mt-3" >
                        <thead className="text-white">
                            <tr>
                                <th>Nome</th>
                                <th>Endereco</th>
                                <th>Telefone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {users.map(user => (
                                <tr key={user.id} className="text-white">
                                    <td>{user.nome}</td>
                                    <td>{user.endereco}</td>
                                    <td>{user.telefone}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </div>
        </>
    )
}

export default Users;