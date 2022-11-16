import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NavBar from '../components/navbar'
import Home from '../pages/home/index'

export default function AplicationRoutes(){

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pagina' element={<h1>Pagina</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}