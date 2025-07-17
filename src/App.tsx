import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import MainLayout from './Layouts/MainLayout'

function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Home />} />
          <Route path='/sponsors' element={<Home />} />
          <Route path='/gallery' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
