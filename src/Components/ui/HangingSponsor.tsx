interface HangingSponsorProps {
    imageURL?: string;
    isMobile?: boolean;
}

const HangingSponsor = ({
    imageURL,
    isMobile = false,
}: HangingSponsorProps) => {
    return (
        <div
            className={`${
                isMobile
                    ? 'w-36 h-36 sm:w-40 sm:h-40'
                    : 'w-[11%] max-sm:w-[28%] max-md:w-[20%]'
            } ${
                !isMobile ? 'aspect-square' : ''
            } bg-white/10 border-white/20 border-[3px] rounded-full overflow-hidden flex items-center justify-center ${
                isMobile ? 'p-1' : 'p-3'
            }`}>
            {imageURL && (
                <img
                    src={imageURL}
                    alt="Sponsor"
                    className="w-full h-full object-contain"
                />
            )}
        </div>
    );
};

export default HangingSponsor;
