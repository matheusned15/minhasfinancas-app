import React from "react";

import Rotas from "./rotas";
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from '../views/login'
import '../custom.css'
import CadastroUsuario from "../views/cadastroUsuario";

class App extends React.Component {
    render() {
        return (
            <div>
                <Rotas/>
            </div>
        )
    }
}

export default App;
