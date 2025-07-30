interface HangingSponsorProps {
  imageURL?: string;
}

const HangingSponsor = ({ imageURL }: HangingSponsorProps) => {
  return (
    <div className="w-[11%] max-sm:w-[28%] max-md:w-[20%] aspect-square bg-white/10 border-white/20 border-[3px] rounded-full overflow-hidden flex items-center justify-center">
      {imageURL && (
        <img
          src={imageURL}
          alt="Sponsor"
          className="w-[60%] h-[60%] object-contain"
        />
      )}
    </div>
  );
};

export default HangingSponsor;
