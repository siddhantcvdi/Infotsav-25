// Image preloader utility with caching
class ImagePreloader {
    private cache = new Map<string, HTMLImageElement>();
    private loadingPromises = new Map<string, Promise<HTMLImageElement>>();

    preloadImage(src: string): Promise<HTMLImageElement> {
        // Return cached image if available
        if (this.cache.has(src)) {
            return Promise.resolve(this.cache.get(src)!);
        }

        // Return existing loading promise if in progress
        if (this.loadingPromises.has(src)) {
            return this.loadingPromises.get(src)!;
        }

        // Create new loading promise
        const loadingPromise = new Promise<HTMLImageElement>(
            (resolve, reject) => {
                const img = new Image();

                img.onload = () => {
                    this.cache.set(src, img);
                    this.loadingPromises.delete(src);
                    resolve(img);
                };

                img.onerror = () => {
                    this.loadingPromises.delete(src);
                    reject(new Error(`Failed to load image: ${src}`));
                };

                img.src = src;
            }
        );

        this.loadingPromises.set(src, loadingPromise);
        return loadingPromise;
    }

    preloadImages(sources: string[]): Promise<HTMLImageElement[]> {
        return Promise.all(sources.map((src) => this.preloadImage(src)));
    }

    getCachedImage(src: string): HTMLImageElement | null {
        return this.cache.get(src) || null;
    }

    clearCache(): void {
        this.cache.clear();
        this.loadingPromises.clear();
    }

    getCacheSize(): number {
        return this.cache.size;
    }
}

// Singleton instance
export const imagePreloader = new ImagePreloader();

// Font preloader utility
class FontPreloader {
    private loadedFonts = new Set<string>();
    private loadingPromises = new Map<string, Promise<FontFace>>();

    preloadFont(
        family: string,
        url: string,
        descriptors?: FontFaceDescriptors
    ): Promise<FontFace> {
        const key = `${family}-${url}`;

        // Return resolved promise if already loaded
        if (this.loadedFonts.has(key)) {
            return Promise.resolve(
                new FontFace(family, `url(${url})`, descriptors)
            );
        }

        // Return existing loading promise if in progress
        if (this.loadingPromises.has(key)) {
            return this.loadingPromises.get(key)!;
        }

        // Create new loading promise
        const loadingPromise = new Promise<FontFace>((resolve, reject) => {
            const fontFace = new FontFace(family, `url(${url})`, descriptors);

            fontFace
                .load()
                .then((loadedFont) => {
                    document.fonts.add(loadedFont);
                    this.loadedFonts.add(key);
                    this.loadingPromises.delete(key);
                    resolve(loadedFont);
                })
                .catch((error) => {
                    this.loadingPromises.delete(key);
                    reject(error);
                });
        });

        this.loadingPromises.set(key, loadingPromise);
        return loadingPromise;
    }

    preloadFonts(
        fonts: Array<{
            family: string;
            url: string;
            descriptors?: FontFaceDescriptors;
        }>
    ): Promise<FontFace[]> {
        return Promise.all(
            fonts.map((font) =>
                this.preloadFont(font.family, font.url, font.descriptors)
            )
        );
    }

    isFontLoaded(family: string, url: string): boolean {
        return this.loadedFonts.has(`${family}-${url}`);
    }

    getLoadedFontsCount(): number {
        return this.loadedFonts.size;
    }
}

// Singleton instance
export const fontPreloader = new FontPreloader();

// Asset manifest for easy management
export const ASSET_MANIFEST = {
    images: {
        hero: [
            '/assets/Images/hero-blur1.svg',
            '/assets/Images/moon.svg',
            '/assets/Images/Infotsav25.svg',
            '/assets/Images/trees-bg.png',
            '/assets/Images/hanging-board.svg',
            '/assets/Images/mind-flayer1.png',
            '/assets/Images/sign-board.svg',
            '/assets/Images/register-sign.png',
        ],
        backgrounds: [
            '/assets/Backgrounds/about-blur.png',
            '/assets/Images/hero-blur2.png',
        ],
        characters: [
            '/assets/Images/Demogorgon.png',
            '/assets/Images/mind-flayer.png',
            '/assets/Images/man-cycling.png',
            '/assets/Images/man-cycling-1.png',
            '/assets/Images/man-stand.png',
        ],
        decorative: [
            '/assets/Images/tree1.png',
            '/assets/Images/tree5.png',
            '/assets/Images/video-board.png',
            '/assets/Images/Home/Video/VideoHolder.png',
        ],
        comingSoon: [
            '/assets/Images/ComingSoon/ComingSoonDesktop.svg',
            '/assets/Images/ComingSoon/ComingSoonMobile.svg',
        ],
        error: ['/assets/Images/404.svg'],
    },
    fonts: [
        { family: 'benguiat', url: '/Fonts/benguiat.ttf' },
        {
            family: 'cattedrale',
            url: '/Fonts/cattedrale.ttf',
        },
        { family: 'naluka', url: '/Fonts/naluka.ttf' },
        {
            family: 'stranger',
            url: '/Fonts/stranger.ttf',
        },
        { family: 'realwood', url: '/Fonts/realwood.otf' },
    ],
};

// Get all images as flat array
export const getAllImages = (): string[] => {
    return Object.values(ASSET_MANIFEST.images).flat();
};

// Preload all critical assets
export const preloadCriticalAssets = (): Promise<
    [HTMLImageElement[], FontFace[]]
> => {
    const allImages = getAllImages();

    return Promise.all([
        imagePreloader.preloadImages(allImages),
        fontPreloader.preloadFonts(ASSET_MANIFEST.fonts),
    ]);
};
