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
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
