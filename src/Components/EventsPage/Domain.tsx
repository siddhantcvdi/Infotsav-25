import Card from "./Card";

interface CardData {
  title: string;
  description: string;
}

interface DomainProps {
  domainName: string;
  cards: CardData[];
}

const Domain: React.FC<DomainProps> = ({ domainName, cards }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-15">
      <h2 className="font-cattedrale text-7xl text-center">{domainName}</h2>
      <div className="w-full flex justify-between">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Domain;
