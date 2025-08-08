import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

// Font loading detection
const fontsToLoad = [
    { family: 'benguiat', url: '/assets/Fonts/Benguiat Bold.ttf' },
    { family: 'cattedrale', url: '/assets/Fonts/Cattedrale-Demo-Regular.ttf' },
    { family: 'naluka', url: '/assets/Fonts/Naluka.ttf' },
    { family: 'stranger', url: '/assets/Fonts/Stranger Things Outlined.ttf' },
];

// Load fonts and mark body as fonts-loaded when ready
Promise.all(
    fontsToLoad.map((font) => {
        const fontFace = new FontFace(font.family, `url(${font.url})`);
        return fontFace
            .load()
            .then((loadedFont) => {
                document.fonts.add(loadedFont);
                return loadedFont;
            })
            .catch(() => {
                // Silently continue if font fails to load
                return null;
            });
    })
)
    .then(() => {
        document.body.classList.add('fonts-loaded');
    })
    .catch(() => {
        // Fallback: show content even if fonts fail
        document.body.classList.add('fonts-loaded');
    });

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
