import React, { FC } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Workarea from './components/workarea/Workarea'
import './App.css'



const App:FC = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <Workarea/>
    </div>
  )
}

export default App