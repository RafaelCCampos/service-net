import SearchIcon from '@material-ui/icons/Search';
import { Category } from '../../types/cadastro';
import { IBGECityResponse, IBGEUFResponse } from '../../types/ibge.model';
import './styles.scss';
import * as localData from '../../data.json';
import { useEffect, useState } from 'react';
import api from '../../services/api';

function Search() {
    const [estado, setEstado] = useState(0);
    const [cidade, setCidade] = useState(0);
    const [ categoria, setCategoria ] = useState(0);

    const categorias: Category[] = localData.categories;
    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECityResponse[]>([]);

    useEffect(() => {
        api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                const ufInitials: IBGEUFResponse[] = response.data.map((uf: any) => {
                    return {
                        id: uf.id,
                        sigla: uf.sigla,
                        nome: uf.nome
                    }
                })
                ufInitials.sort((a, b) => a.sigla > b.sigla ? 1 : -1)
                setUfs(ufInitials)
            })
    }, [])

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
    }, [estado])

    return (
        <div className="searchContainer">
            <h5>REALIZE SUA BUSCA</h5>
            <div className="campos-busca">
                <select value={categoria} defaultValue={0} onChange={(e) => setCategoria(Number(e.target.value))}>
                        <option value={0}>Selecione uma categoria</option>
                        {categorias.map(category => {
                            return <option key={category.id} value={category.id}>{category.nome}</option>
                        })}
                    </select>
                <select className="ufSelect" value={estado} onChange={(e) => setEstado(Number(e.target.value))}>
                    <option value={0}>Selecione um estado</option>
                    {ufs.map(uf => {
                        return <option key={uf.id} value={uf.id}>{uf.sigla}</option>
                    })}
                </select>
                <select value={cidade} onChange={(e) => setCidade(Number(e.target.value))}>
                    <option value={0}>Selecione uma cidade</option>
                    {cities.map(city => {
                        return <option key={city.id} value={city.id}>{city.nome}</option>
                    })}
                </select>
                <button>
                    <SearchIcon />
                Buscar
            </button>
            </div>
        </div>
    );
}

export default Search;
