import { useEffect, useState } from "react";
import { Person } from "../../types/cadastro";

import api from "../../services/api";
import { Container, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "../../components/Header";

import './styles.scss';
import { useHistory } from "react-router";

const Users = () => {

    const history = useHistory();

    const [users, setUsers] = useState<Array<Person>>([]);

    useEffect( () => {
         api.get('/persons')
        .then(response => {
            setUsers(response.data)
        })
    },[users])

    const deleteUser = (idDelete: number) => {
        api.delete(`/persons/${idDelete}`)
        .then(() => alert("Usuário deletado com sucesso."))
        .catch(() => alert("Não foi possível deletar o usuário"))
    }

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
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {users.map(user => (
                                <tr onDoubleClick={ () => {
                                    history.push(`/usuarios/${user.id}`)
                                }} key={user.id} className="text-white">
                                    <td>{user.nome}</td>
                                    <td>{user.endereco}</td>
                                    <td>{user.telefone}</td>
                                    <td>{user.email}</td>
                                    <td><IconButton size="small" onClick={() => deleteUser(user.id)}><DeleteIcon/></IconButton></td>
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