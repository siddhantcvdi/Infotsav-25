import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MainLayout from './Layouts/MainLayout';
import Error404 from './Components/Other/Error404';
import Sponsors from './Pages/Sponsors';
import ComingSoon from './Pages/ComingSoon';

function App() {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<ComingSoon />} />
                    <Route path="/register" element={<ComingSoon />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/ambassador" element={<ComingSoon />} />
                    <Route path="/contact" element={<ComingSoon />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
