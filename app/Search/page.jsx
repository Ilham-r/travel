"use client";
import Searchbar from "./sections/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MultiSlider from "./sections/MultiSlider";
import ResultCard from "@/components/ResultCard";

const freebiesList = [
  { id: "breakfast", name: "Free breakfast" },
  { id: "parking", name: "Free parking" },
  { id: "internet", name: "Free internet" },
  { id: "airportsh", name: "Free airport shuttle" },
  { id: "cancellation", name: "Free cancellation" },
];
const amenitiesList = [
  "24hr front desk",
  "Air-conditioned",
  "Fitness",
  "Pool",
  "Wi-Fi",
  "Restaurant",
  "Spa",
  "Bar",
  "Laundry service",
  "Concierge",
  "Room service",
  "Free toiletries",
  "Hairdryer",
  "Mini-bar",
  "Safe",
  "Pet-friendly",
  "Parking",
  "Non-smoking rooms",
  "Wheelchair accessible",
  "Business center",
  "Meeting rooms",
  "Shuttle service",
  "Beach access",
  "Golf course",
  "Tennis court",
];

const SearchPage = () => {
  const [isUp, setIsUp] = useState(false);
  const changeState = () => {
    setIsUp(!isUp);
  };
  const [selectedFreebies, setSelectedFreebies] = useState({});

  const handleChange = (id) => {
    setSelectedFreebies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const visibleAmenities = showAll ? amenitiesList : amenitiesList.slice(0, 4);

  return (
    <div className=" w-full h-screen flex-col flex mt-10  mb-48 justify-start  px-20">
      <Searchbar />
      <div className="grid grid-cols-[280px_1fr] py-7">
        {/*sidebar -filters-*/}
        <div className="flex flex-col gap-4  ">
          <p className="text-xl font-semibold">Filters</p>
          <div className="flex w-full flex-col justify-center items-center gap-5">
            <div className="flex w-full justify-between items-center">
              <p className="text-lg font-semibold">Price</p>
              <FontAwesomeIcon
                icon={isUp ? faAngleUp : faAngleDown}
                className="cursor-pointer"
                onClick={changeState}
              />
            </div>

            <div className={`${isUp ? "hidden" : "flex"}`}>
              <MultiSlider />
            </div>
          </div>
          <div className="flex w-full flex-col justify-center items-center gap-5 ">
            <div className="flex w-full justify-between items-center">
              <p className="text-base font-semibold">Rating</p>
              <FontAwesomeIcon
                icon={isUp ? faAngleUp : faAngleDown}
                className="cursor-pointer"
                onClick={changeState}
              />
            </div>

            <ul
              className={`flex justify-center items-center gap-2 ${
                isUp ? "hidden" : "none"
              } `}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <li
                  key={i}
                  className="border-2  border-mintgreen cursor-pointer hover:bg-mintgreen float-left list-none"
                >
                  <input
                    type="checkbox"
                    id={`check_${i}`}
                    name={`check_${i}`}
                    value={`check_${i}`}
                    className="peer hidden"
                  />
                  <label
                    className="p-3 inline-block border-2 border-transparent cursor-pointer peer-checked:bg-mintgreen peer-checked:text-white peer-checked:border-white"
                    htmlFor={`check_${i}`}
                  >
                    {i}+
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-5 ">
            <div className="flex w-full justify-between items-center">
              <p className="text-lg font-semibold">Freebies</p>
              <FontAwesomeIcon
                icon={isUp ? faAngleUp : faAngleDown}
                className="cursor-pointer"
                onClick={changeState}
              />
            </div>

            <div
              className={`flex justify-start flex-col items-start gap-2 ${
                isUp ? "hidden" : "none"
              } `}
            >
              {freebiesList.map((freebie) => (
                <label key={freebie.id} className="flex items-center text-base">
                  <input
                    type="checkbox"
                    checked={!!selectedFreebies[freebie.id]}
                    onChange={() => handleChange(freebie.id)}
                    className="w-5 h-5 mr-2"
                  />
                  {freebie.name}
                </label>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col justify-center items-start gap-5 ">
            <div className="flex w-full justify-between items-center">
              <p className="text-lg font-semibold">Amenities</p>
              <FontAwesomeIcon
                icon={isUp ? faAngleUp : faAngleDown}
                className="cursor-pointer"
                onClick={changeState}
              />
            </div>

            <div
              className={`flex justify-start flex-col items-start gap-2 ${
                isUp ? "hidden" : "none"
              } `}
            >
              {visibleAmenities.map((amenitie, index) => (
                <label key={index} className="flex items-center text-base">
                  <input type="checkbox" className="w-5 h-5 mr-2" />
                  {amenitie}
                </label>
              ))}
              {!showAll && (
                <button onClick={handleToggle} className="text-red-500">
                  +{amenitiesList.length - visibleAmenities.length} more
                </button>
              )}

              {showAll && (
                <button onClick={handleToggle} className="text-red-500">
                  Show less
                </button>
              )}
            </div>
          </div>
        </div>
        {/* search resauls */}

        <div className="flex flex-col flex-1 items-start pl-7 gap-5 text-blackgreen font-montserrat">
          <div className="flex w-full bg-white  shadow-lg justify-between items-center p-4 ">
            <div className=" flex flex-1 flex-col justify-center items-start border-r-[1px] border-gray-200 cursor-pointer">
              <p className="text-base font-semibold">Hotels</p>
              <p className="opacity-40">200</p>
            </div>
            <div className=" flex flex-1 flex-col justify-center items-start border-r-[1px]  border-gray-200 pl-4 cursor-pointer">
              <p className="text-base font-semibold">Motels</p>
              <p className="opacity-40">200</p>
            </div>
            <div className=" flex flex-1 flex-col justify-center items-start pl-4 cursor-pointer">
              <p className="text-base font-semibold">Resorts</p>
              <p className="opacity-40">200</p>
            </div>
          </div>
          <p className="text-sm font-semibold">
            showing 4 of <span className="text-salmon">400</span>
          </p>

          {/* result list  */}
          <div className="flex w-full flex-col gap-6">
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
