import { useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";
import { Person } from "../../types/cadastro";

import './styles.scss';

type Props = {
    data?: Person,
    userSubmit: Function
}
    
const Form = ({userSubmit}: Props) => {
    const [ nome, setNome ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const cleanForm = () => {
        setNome('')
        setEndereco('')
        setTelefone('')
        setSenha('')
        setEmail('')
    }

    return (
        <form onSubmit={(e) => {userSubmit(e, {
            nome,
            endereco,
            telefone,
            email,
            senha,
        })
            cleanForm()
            }
        } className="formContainer">
            <TextField value={nome} onChange={(e) => setNome(e.target.value)} variant="filled" margin="normal" fullWidth label="Nome" />
            <TextField value={endereco} onChange={(e) => setEndereco(e.target.value)} variant="filled" margin="normal" fullWidth label="Endereço" />
            <TextField value={telefone} onChange={(e) => setTelefone(e.target.value)} variant="filled" margin="normal" fullWidth label="Telefone" />
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} variant="filled" margin="normal" fullWidth label="E-mail" />
            <TextField value={senha} onChange={(e) => setSenha(e.target.value)} variant="filled" margin="normal" fullWidth label="Senha" />
            <Box marginTop={2}>
                <Button size="large" variant="contained" type="submit">Cadastrar</Button>
            </Box>
        </form>
    )
}

export default Form;