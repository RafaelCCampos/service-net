import { Button, TextField } from "@material-ui/core"
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import imgOperarios from '../../assets/images/landing-top.svg';

import './styles.scss';
import { Link } from "react-router-dom";

const Login = () => {
    return (    
        <>
            <Header/>
            <div className="loginContainer">
                <Logo/>
                <img src={imgOperarios} width="350px" alt="Trabalhadores"/>
                <div className="fieldContainer">
                    <TextField variant="filled" margin="normal" fullWidth label="E-mail"/>
                    <TextField variant="filled" margin="normal" fullWidth label="Senha"/>
                </div>
                <div className="buttonContainer">
                    <Link to="/usuarios"><Button size="large" variant="contained" type="submit">Login</Button></Link>
                    <Link to="/cadastro"><Button size="large" variant="contained" type="submit">Cadastre-se</Button></Link>
                </div>
            </div>
        </>
    )
}

export default Login;