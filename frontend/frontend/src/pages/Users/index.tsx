import { useEffect } from "react";
import api from "../../services/api";
import { Person } from "../../types/cadastro";

const Users = () => {

    const [users, setUsers] = useEffect<Person>[]([])

    api.get('/persons').then()

    return (
        <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereco</th>
                            <th>Telefone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={item.id}>
                                <td>{formatDate(item.date)}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                            </tr>
                        ))}
                            
                    </tbody>
                </table>
        </div>
    )
}

export default Users;