import { Box, Button, TextField, Select, InputAdornment } from "@material-ui/core";
import { FormEvent , useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { POST_ERROR, POST_SUCCESS } from "../../constants";
import api from "../../services/api";
import { Category, Service } from "../../types/cadastro";
import localData from "../../data.json";

import "./styles.scss";
import { IBGECityResponse, IBGEUFResponse } from "../../types/ibge.model";

type Props = {
    userId: string;
}

const CadastroServico = ({userId}: Props) => {

    const [ categoria, setCategoria ] = useState(0);
    const [ valor, setValor ] = useState(0);
    const [ experiencia, setExperiencia ] = useState(0);
    const [ estado, setEstado ] = useState(0);
    const [ cidade, setCidade ] = useState(0);

    const categorias: Category[] = localData.categories;
    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECityResponse[]>([]);

    useEffect(() => {
        api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
            const ufInitials: IBGEUFResponse[]  = response.data.map((uf: any) => {
                return {
                    id: uf.id,
                    sigla: uf.sigla,
                    nome: uf.nome
                }})
            ufInitials.sort((a,b) => a.sigla > b.sigla? 1 : -1)
            setUfs(ufInitials)
        })
    },[])

    useEffect(() => {
        
        api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then(response => {
            let data: IBGECityResponse[] = [];
            response.data.map((city: any) => {
                data.push({
                    id: city.id,
                    nome: city.nome,
                    uf: city.microrregiao.mesorregiao.UF.id,
                })
            })
            setCidade(0)
            setCities(data)
        })
    },[estado])


    const onSubmit = (event: FormEvent, user: Service) => {
        event.preventDefault();
        
        api.post('/services', {
            person: userId,
            categoria: categoria,
            experiencia: experiencia,
            valor: valor,
            cidade: cidade,
        }).then(() => {
            alert(POST_SUCCESS)
        }).catch(() => {
            alert(POST_ERROR)
        })
    }

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
                    <Select className="selected" value={categoria} defaultValue={0} onChange={(e) => setCategoria(Number(e.target.value))} variant="filled" fullWidth>
                        <option value={0}>Selecione uma categoria</option>
                        {categorias.map(category => {
                            return <option key={category.id} value={category.id}>{category.nome}</option>
                        })}
                    </Select>
                    <TextField value={valor} onChange={(e) => setValor(Number(e.target.value))} variant="filled" margin="normal" fullWidth label="Valor">
                        <InputAdornment position="start">R$</InputAdornment>
                    </TextField>
                    <TextField value={experiencia} onChange={(e) => setExperiencia(Number(e.target.value))} variant="filled" margin="normal" fullWidth label="Experiência em meses" />
                    <div className="buscaLocalidade">
                        <Select className="selected"  value={estado} onChange={(e) => setEstado(Number(e.target.value))} variant="filled" fullWidth>
                            <option value={0}>Selecione um estado</option>
                            {ufs.map(uf => {
                                return <option key={uf.id} value={uf.id}>{uf.sigla}</option>
                            })}
                        </Select>
                        <Select value={cidade} className="selected" onChange={(e) => setCidade(Number(e.target.value))} variant="filled" fullWidth>
                            <option value={0}>Selecione uma cidade</option>
                            {cities.map(city => {
                                return <option key={city.id} value={city.id}>{city.nome}</option>
                            })}
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