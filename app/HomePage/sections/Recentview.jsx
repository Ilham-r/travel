const SmallCard = () => (
  <div className="grid grid-cols-[80px_1fr] cursor-pointer gap-4  hover:bg-slate-300 hover:bg-opacity-30">
    <div className="block w-20 h-20 overflow-hidden rounded-lg ">
      <img
        src="./images/turkey.jpg"
        alt="turkey"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-col justify-center">
      <p className="font-bold">Istanbul, Turkey</p>
      <p>356 places</p>
    </div>
  </div>
);
const Recent = () => {
  return (
    <div className="flex flex-col mt-48 px-20 w-full h-fit py-9 gap-5 max-md:px-10">
      <h1 className="text-h2">Your recent searches</h1>
      <div className="flex flex-wrap justify-between items-center max-md:gap-6">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default Recent;
