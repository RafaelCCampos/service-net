import { Button, TextField } from "@material-ui/core"
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import imgOperarios from '../../assets/images/landing-top.svg';

import './styles.scss';
import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";

const Login = () => {

    const history = useHistory()

    const refLogin = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)

    const loginClick = () => {
        if (refLogin.current?.value === "admin@servicenet.com" && refPassword.current?.value === "servicenet") {
            history.push('/usuarios')
        } else {
            alert("O Login e o password não conferem, verifique os dados inseridos e tente novamente.")
        }
    }

    return (    
        <>
            <Header/>
            <div className="loginContainer">
                <Logo/>
                <img src={imgOperarios} width="350px" alt="Trabalhadores"/>
                <div className="fieldContainer">
                    <TextField variant="filled" value={refLogin.current?.value} margin="normal" fullWidth label="E-mail" inputRef={refLogin}/>
                    <TextField type="password" value={refPassword.current?.value} variant="filled" margin="normal" fullWidth label="Senha" inputRef={refPassword}/>
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