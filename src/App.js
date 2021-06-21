import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageHome from "./page-home.js";
import PageSearchResult from "./page-search-result.js";
import PagePoke from "./page-poke.js";
import Layout from "./components/layout.js";

//react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
    return (
        // <PageHome></PageHome>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/busqueda" component={PageSearchResult}></Route>
                    <Route exact  path="/pokemon" component={PagePoke}></Route>
                    <Route path="/" component={PageHome}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
