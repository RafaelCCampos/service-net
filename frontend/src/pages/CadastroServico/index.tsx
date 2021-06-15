import { Box, Button, TextField, Select } from "@material-ui/core";
import { FormEvent , useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { POST_ERROR, POST_SUCCESS } from "../../constants";
import api from "../../services/api";
import { Category, Service } from "../../types/cadastro";
import localData from "../../data.json";

import "./styles.scss";

type Props = {
    userId: string;
}

const CadastroServico = ({userId}: Props) => {

    const categorias: Category[] = localData.categories;

    const onSubmit = (event: FormEvent, user: Service) => {
        event.preventDefault();
        
        api.post('/services', {
            
        }).then(() => {
            alert(POST_SUCCESS)
        }).catch(() => {
            alert(POST_ERROR)
        })
    }

    const [ categoria, setCategoria ] = useState(0);
    const [ valor, setValor ] = useState(0);
    const [ experiencia, setExperiencia ] = useState(0);
    const [ estado, setEstado ] = useState(0);
    const [ cidade, setCidade ] = useState(0);

    const cleanForm = () => {
        setCategoria(0)
        setValor(0)
        setExperiencia(0)
        setCidade(0)
    }

    return (
        <>
            <Header/>
            <div className="cadastroServicosContainer">
                
                <form onSubmit={(e) => {onSubmit(e, {
                    categoria,
                    valor,
                    experiencia,
                    cidade,
                })
                    cleanForm()
                    }
                } className="formContainer">

                <div className="cadastroServicosTop">
                   <div className="cadastroServicosTexto">
                        <h1>Cadastro de serviços</h1>
                        <p>Realize o cadastro do seu serviço e alcance clientes em todo o Brasil</p>
                   </div>
                   
                    <Link to={`/usuarios/${userId}`}>
                        <Button size="large" variant="contained" type="submit">Editar usuário</Button>
                    </Link>
                </div>

                    <Select className="selected" value={categoria} onChange={(e) => setCategoria(Number(e.target.value))} variant="filled" fullWidth>
                        <option value={0}>Selecione uma categoria</option>
                        {categorias.map(category => {
                            return <option key={category.id} value={category.id}>{category.nome}</option>
                        })}
                    </Select>
                    <TextField value={valor} onChange={(e) => setValor(Number(e.target.value))} variant="filled" margin="normal" fullWidth label="Valor" />
                    <TextField value={experiencia} onChange={(e) => setExperiencia(Number(e.target.value))} variant="filled" margin="normal" fullWidth label="Experiência em meses" />
                    <div className="buscaLocalidade">
                        <Select className="selected" value={estado} onChange={(e) => setEstado(Number(e.target.value))} variant="filled" fullWidth>
                            <option value={0}>Selecione um estado</option>
                        </Select>
                        <Select value={cidade} className="selected" onChange={(e) => setCidade(Number(e.target.value))} variant="filled" fullWidth>
                            <option value={0}>Selecione uma cidade</option>
                        </Select>
                    </div>
                    <Box marginTop={2}>
                        <Button size="large" variant="contained" type="submit">Salvar</Button>
                    </Box>

                </form>
            </div>
        </>
    )
}

export default CadastroServico;