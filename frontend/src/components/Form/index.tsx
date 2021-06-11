import { useEffect, useState } from "react";
import { TextField, Box, Button } from "@material-ui/core";

import './styles.scss';
import api from "../../services/api";

type Props = {
    userSubmit: Function,
    userId?: string
}
    
const Form = ({userSubmit, userId}: Props) => {
    const [userSetted, setUserSetted] = useState(false);

    const buscarUser = async () => {
        await api.get(`/persons/${userId}`)
        .then(response => {
            let {data} = response
            if (!userSetted) {
                setUserSetted(true)
                setNome(data.nome)
                setEndereco(data.endereco)
                setTelefone(data.telefone)
                setSenha(data.senha)
                setEmail(data.email)
            }
        })
    }

    useEffect(() => {
        if (userId) {
            buscarUser()
        }
    },[])

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
            id: Number(userId),
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
                <Button size="large" variant="contained" type="submit">Salvar</Button>
            </Box>
        </form>
    )
}

export default Form;