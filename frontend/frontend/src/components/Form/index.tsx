import { TextField, Box, Button } from "@material-ui/core";
import { FormEvent, useRef, useState } from "react";
import api from "../../services/api";
import { Person } from "../../types/cadastro";
import './styles.scss';

type Props = {
    data?: Person,
    userSubmit?: Function
}

const Form = ({data, userSubmit}: Props) => {

    // const nomeRef = useRef<HTMLInputElement>(null);
    // const endRef = useRef<HTMLInputElement>(null);
    // const foneRef = useRef<HTMLInputElement>(null);
    // const emailRef = useRef<HTMLInputElement>(null);
    // const senhaRef = useRef<HTMLInputElement>(null);

    const blankUser: Person = {
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        senha: '',
    }

    const [user, setUser] = useState<Person>(blankUser)

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
            alert("Cadastro realizado com sucesso")
            setNome('')
            setEndereco('')
            setTelefone('')
            setSenha('')
            setEmail("")
        })
    }

    // const personNew: Person = {
    //     nome: '',
    //     endereco: '',
    //     telefone: '',
    //     email: '',
    //     senha: '',
    // }

    return (
        // <form onSubmit={() => onSubmit} className="formContainer">
        //     <TextField variant="filled" margin="normal" fullWidth label="Nome" inputRef={nomeRef}/>
        //     <TextField variant="filled" margin="normal" fullWidth label="Endereço" inputRef={endRef}/>
        //     <TextField variant="filled" margin="normal" fullWidth label="Telefone" inputRef={foneRef}/>
        //     <TextField variant="filled" margin="normal" fullWidth label="E-mail" inputRef={emailRef}/>
        //     <TextField variant="filled" margin="normal" fullWidth label="Senha" inputRef={senhaRef}/>
        //     <Box marginTop={2}>
        //         <Button size="large" variant="contained" type="submit">Cadastrar</Button>
        //     </Box>
        // </form>
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