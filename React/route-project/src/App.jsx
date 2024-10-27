import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
//import {} from 'react'
const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Products' element={<Products/>}/>
                    <Route path='/Contacts' element={<Contact/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App