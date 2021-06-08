import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import UserEdit from "./pages/UserEdit";
import Users from "./pages/Users";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/login" component={Login}/>
                <Route path="/usuarios" component={Users} exact/>
                <Route path="/usuarios/:id" render={(props) => <UserEdit userId={props.match.params.id}/>}/>
                <Route component={() => (<div>Página não encontrada.</div>)}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;