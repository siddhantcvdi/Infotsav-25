interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-yellow-800 h-120 w-80 rounded-md p-4 text-white">
      <h3 className="text-xl font-bold font-cattedrale">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Card;
