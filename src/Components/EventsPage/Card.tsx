import React from "react";

interface CardProps {
  title: string;
  description: string;
  id?: string;
  onRegister?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, id, onRegister }) => {
  return (
    <div
      id={id}
      className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden h-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {/* Upper half - Image placeholder (using color for now) */}
      <div className="h-2/5 sm:h-1/2 w-full bg-teal-600 flex items-center justify-center">
        {/* You can replace this div with an actual image later */}
      </div>

      {/* Lower half - Content */}
      <div className="h-3/5 sm:h-1/2 p-4 sm:p-6 flex flex-col">
        <h3 className="text-xl font-bold text-teal-300 font-cattedrale">
          {title}
        </h3>
        <div
          className="mt-2 flex-grow overflow-y-auto max-h-[7.5em] pr-2 rounded-md bg-gray-900/60"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="hide-scrollbar text-gray-300 text-xs sm:text-sm p-2">{description}</div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors duration-300"
          onClick={onRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Card;
