const FeaturedEvents = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-15">
      <h2 className="font-cattedrale text-7xl text-center">Feautured Events</h2>
      <div className="h-130 w-full flex">
        <div className="h-full w-3/5 bg-green-800 rounded-l-md"></div>
        <div className="h-full w-2/5 bg-red-800 rounded-r-md"></div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
