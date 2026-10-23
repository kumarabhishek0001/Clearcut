import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import {Home, BuyCredit, Result} from "./pages"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="result" element={<Result/>}/>
            <Route path="buy-credits" element={<BuyCredit/>}/>
        </Route>
    )
)

export default router