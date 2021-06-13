import { Link } from "react-router-dom";
import Header from "../../components/Header";

type Props = {
    userId: string;
}

const CadastroServico = ({userId}: Props) => {
    return (
        <>
            <Header/>
            <h1>Cadastro de serviços</h1>
            <Link to="/usuarios/1" >Editar cadastro</Link>
        </>
    )
}

export default CadastroServico;