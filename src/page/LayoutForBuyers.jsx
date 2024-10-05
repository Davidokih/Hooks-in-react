import React from 'react'
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import SignUp from '../components/SignUp';

const LayoutForBuyers = () => {
  return (
      <div>
          <div className='bg-blue-800'><Header /></div>
          <div>hello</div>
          <Routes>
              <Route path='/dashboard' element={ <Login />} />
              <Route path='/profile' element={ <Login />} />
              <Route path='/products' element={ <SignUp />} />
          </Routes>
    </div>
  )
}

export default LayoutForBuyers