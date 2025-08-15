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
      className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden h-[400px] w-full"
    >
      {/* Upper half - Image placeholder (using color for now) */}
      <div className="h-1/2 w-full bg-teal-600 flex items-center justify-center">
        {/* You can replace this div with an actual image later */}
      </div>

      {/* Lower half - Content */}
      <div className="h-1/2 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-teal-300 font-cattedrale">
          {title}
        </h3>
        <p className="mt-2 text-gray-300 text-sm line-clamp-3 flex-grow">
          {description}
        </p>
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
