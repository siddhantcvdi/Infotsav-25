import React from "react";

const ArrowNavButton: React.FC<{
  direction: "left" | "right";
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <div
    onClick={onClick}
    className="w-12 h-12 bg-gray-700 hover:bg-teal-500 text-white text-2xl font-bold rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? "←" : "→"}
  </div>
);

export default ArrowNavButton;
