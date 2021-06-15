import { Button, TextField } from "@material-ui/core"
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import imgOperarios from '../../assets/images/landing-top.svg';

import './styles.scss';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Person } from "../../types/cadastro";

const Login = () => {

    useEffect(() => {
        api.get('/persons')
        .then(response => {
            setUsers(response.data)
        })
    },[])

    const blankUser: Person = {
        id: 0,
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        senha: '',
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<Person>(blankUser);
    const [users, setUsers] =  useState<Person[]>([]);

    const history = useHistory()

    const userLoginChange = (userLogin: string) => {
        setLogin(userLogin)
        setUser(users.filter(userFilter => {return userFilter.email === userLogin})[0])
    }
    

    const loginClick = () => {
        if (login === "admin@servicenet.com" && password === "servicenet") {
            history.push('/usuarios')
        } else {
            if (user?.id > 0 && user.email === login && user.senha === password) {
                history.push(`/usuarios/${user.id}/servicos`)
            }
            else {
                alert("O Login e o password não conferem, verifique os dados inseridos e tente novamente.")
            }
        }
    }

    return (    
        <>
            <Header/>
            <div className="loginContainer">
                <Logo/>
                <img src={imgOperarios} width="350px" alt="Trabalhadores"/>
                <div className="fieldContainer">
                    <TextField variant="filled" value={login} onChange={e => userLoginChange(e.target.value)} margin="normal" fullWidth label="E-mail"/>
                    <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} variant="filled" margin="normal" fullWidth label="Senha"/>
                </div>
                <div className="buttonContainer">
                    <Button size="large" variant="contained" onClick={loginClick}>Login</Button>
                    <Link to="/cadastro"><Button size="large" variant="contained" type="submit">Cadastre-se</Button></Link>
                </div>
            </div>
        </>
    )
}

export default Login;