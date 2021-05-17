import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Landing from "./pages/Landing";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route component={() => (<div>Página não encontrada.</div>)}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;