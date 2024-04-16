import React from 'react'
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import Lucky from '../body/index.jsx'
import Aviator from '../body/index2.jsx'
import AviatorActive from '../predict/1win/lucky/aviatorActive.jsx'
import LuckyActive from '../predict/1win/lucky/indexActive.jsx'
import Login from '../login/index.jsx'
import Avialogin from '../login/aviator.jsx'
import List from '../list/index.jsx'
import PredictLucky from '../predict/1win/lucky/index.jsx'
import PredictAvia from '../predict/1win/lucky/aviator.jsx'
import Register from '../register/index.jsx'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter,  } from 'react-router-dom'



const index = () => {
  return ( 
    <>
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path='/' element={<List/>} />
      <Route path='/lucky/login' element={<Login/>} />
      <Route path='/aviator/login' element={<Avialogin/>} />
      <Route path='/lucky' element={<Lucky/>} />
      <Route path='/aviator' element={<Aviator/>} />
      <Route path='predict/aviator/active' element={<AviatorActive/>} />
      <Route path='predict/lucky/active' element={<LuckyActive/>} />
      <Route path='/predict/lucky' element={<PredictLucky/>} />
      <Route path='/predict/aviator' element={<PredictAvia/>} />
      <Route path='/register' element={<Register/>} />

    </Routes>
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default index