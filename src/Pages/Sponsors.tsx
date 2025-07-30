import HangingSponsor from "@/Components/ui/HangingSponsor";

const Sponsors = () => {
  return (
    <div className="relative w-full h-[600px]">
      {/* Teal Blur Background */}
      <div className="w-[1286px] h-[1286px] bg-gradient-to-b from-slate-950/90 to-teal-700/90 rounded-full blur-[253.95px] absolute -top-[800px] left-[120px] z-0" />

      <div className="flex flex-col items-center gap-[64px] pt-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-['Cattedrale-Demo-Regular'] text-white z-15">
          Our Sponsors
        </h1>

        {/* Sponsor Container with controlled width */}
        <div className="w-[1200px] max-w-full z-10 flex gap-[64px]">
          <HangingSponsor imageURL="https://imgs.search.brave.com/QH6RcKqOra0M99evP7VW3aEwyTGO0Tir7FbPZaszgQo/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWRldmZvbGlvLWxv/Z28taWNvbi1kb3du/bG9hZC1pbi1zdmct/cG5nLWdpZi1maWxl/LWZvcm1hdHMtLWJy/YW5kLWNvbXBhbnkt/cHJvZ3JhbW1pbmct/bGFuZ3VhZ2UtbG9n/b3MtcGFjay1pY29u/cy04MzgzNzI0LnBu/Zz9mPXdlYnAmdz0x/Mjg" />
          <HangingSponsor />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
