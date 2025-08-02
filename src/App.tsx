import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MainLayout from './Layouts/MainLayout';
import Error404 from './Components/Other/Error404';
import Sponsors from './Pages/Sponsors';
import CommingSoon from './Pages/CommingSoon';

function App() {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<CommingSoon />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/gallery" element={<CommingSoon />} />
                    <Route path="/contact" element={<CommingSoon />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
