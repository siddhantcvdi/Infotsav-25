// Font loading utility for better font management
export class FontManager {
    private static instance: FontManager;
    private loadedFonts = new Set<string>();
    private loadingPromises = new Map<string, Promise<FontFace>>();
    private fontCache = new Map<string, FontFace>();

    static getInstance(): FontManager {
        if (!FontManager.instance) {
            FontManager.instance = new FontManager();
        }
        return FontManager.instance;
    }

    async loadFont(
        family: string,
        url: string,
        descriptors?: FontFaceDescriptors
    ): Promise<FontFace> {
        const key = `${family}-${url}`;

        // Return if already loaded
        if (this.loadedFonts.has(key)) {
            const cachedFont = this.fontCache.get(key);
            if (cachedFont) {
                return Promise.resolve(cachedFont);
            }
        }

        // Return existing promise if loading
        if (this.loadingPromises.has(key)) {
            return this.loadingPromises.get(key)!;
        }

        // Create new loading promise
        const loadingPromise = new Promise<FontFace>((resolve, reject) => {
            const fontFace = new FontFace(family, `url(${url})`, {
                display: 'swap',
                ...descriptors,
            });

            fontFace
                .load()
                .then((loadedFont) => {
                    document.fonts.add(loadedFont);
                    this.loadedFonts.add(key);
                    this.fontCache.set(key, loadedFont);
                    this.loadingPromises.delete(key);

                    // Force font to be available immediately
                    document.body.style.fontFamily = `${family}, sans-serif`;
                    setTimeout(() => {
                        document.body.style.fontFamily = '';
                    }, 10);

                    console.log(`✅ Font loaded and cached: ${family}`);
                    resolve(loadedFont);
                })
                .catch((error) => {
                    this.loadingPromises.delete(key);
                    console.error(`❌ Failed to load font: ${family}`, error);
                    reject(error);
                });
        });

        this.loadingPromises.set(key, loadingPromise);
        return loadingPromise;
    }

    async loadAllFonts(
        fonts: Array<{
            family: string;
            url: string;
            descriptors?: FontFaceDescriptors;
        }>
    ): Promise<FontFace[]> {
        const promises = fonts.map((font) =>
            this.loadFont(font.family, font.url, font.descriptors)
        );

        return Promise.all(promises);
    }

    isFontLoaded(family: string, url: string): boolean {
        return this.loadedFonts.has(`${family}-${url}`);
    }

    getFontLoadingProgress(): { loaded: number; total: number } {
        return {
            loaded: this.loadedFonts.size,
            total: this.loadedFonts.size + this.loadingPromises.size,
        };
    }

    // Check if a font is ready to use
    async waitForFont(
        family: string,
        timeout: number = 3000
    ): Promise<boolean> {
        return new Promise((resolve) => {
            const startTime = Date.now();

            const checkFont = () => {
                // Check if font is loaded using font detection
                if (document.fonts.check(`16px ${family}`)) {
                    resolve(true);
                    return;
                }

                // Check timeout
                if (Date.now() - startTime > timeout) {
                    console.warn(`⚠️ Font check timeout for: ${family}`);
                    resolve(false);
                    return;
                }

                // Continue checking
                requestAnimationFrame(checkFont);
            };

            checkFont();
        });
    }

    // Preload all website fonts
    async preloadWebsiteFonts(): Promise<void> {
        const websiteFonts = [
            { family: 'benguiat', url: '/Fonts/benguiat.ttf' },
            { family: 'cattedrale', url: '/Fonts/cattedrale.ttf' },
            { family: 'naluka', url: '/Fonts/naluka.ttf' },
            { family: 'stranger', url: '/Fonts/stranger.ttf' },
            { family: 'realwood', url: '/Fonts/realwood.otf' },
        ];

        try {
            await this.loadAllFonts(websiteFonts);
            console.log('🎭 All website fonts loaded successfully!');

            // Wait for fonts to be ready
            await Promise.all(
                websiteFonts.map((font) => this.waitForFont(font.family))
            );
        } catch (error) {
            console.error('❌ Failed to load some fonts:', error);
        }
    }
}

export const fontManager = FontManager.getInstance();
