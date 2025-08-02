interface SponsersPageUiProps {
    imageURL?: string;
    alt?: string;
}

const SponsersPageUi = ({ imageURL, alt }: SponsersPageUiProps) => {
    return (
        <div className="w-[200px] h-[150px] bg-white/10 border-white/20 border-[3px] rounded-lg overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            {imageURL && (
                <img
                    src={imageURL}
                    alt={alt || 'Sponsor'}
                    className="w-[80%] h-[80%] object-contain"
                />
            )}
        </div>
    );
};

export default SponsersPageUi;
