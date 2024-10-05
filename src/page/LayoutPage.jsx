import React from 'react'
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import SignUp from '../components/SignUp';

const LayoutPage = () => {
  return (
      <div>
          <Header />
          <div>hello</div>
          <Routes>
              <Route path='/dashboard' element={ <Login />} />
              <Route path='/profile' element={ <Login />} />
              <Route path='/products' element={ <SignUp />} />
          </Routes>
    </div>
  )
}

export default LayoutPage