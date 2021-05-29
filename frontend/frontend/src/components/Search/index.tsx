import SearchIcon from '@material-ui/icons/Search';
import './styles.scss';

function Search() {
  return (
    <div className="searchContainer">
        <h5>REALIZE SUA BUSCA</h5>
        <div className="campos-busca">
            <select>
                <option>Selecione um serviço</option>
            </select>
            <select>
                <option>Selecione uma cidade</option>
            </select>
            <button>
                <SearchIcon/>
                Buscar
            </button>
        </div>
    </div>
  );
}

export default Search;
