import { TextField, Box, Button } from "@material-ui/core";
import { FormEvent, useState } from "react";
import api from "../../services/api";
import './styles.scss';

const Form = () => {
    const [ nome, setNome ] = useState('');
    const [ endereco, setEndereco ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        api.post('/persons', {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            email: email,
            senha: senha
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            setNome('')
            setEndereco('')
            setTelefone('')
            setSenha('')
            setEmail('')
        }).catch(() => {
            alert('Erro ao realizar cadastro!')
        })
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} className="formContainer">
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