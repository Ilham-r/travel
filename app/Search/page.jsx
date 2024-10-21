"use client";
import Searchbar from "./sections/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MultiSlider from "./sections/MultiSlider";

const freebiesList = [
  { id: "breakfast", name: "Free breakfast" },
  { id: "parking", name: "Free parking" },
  { id: "internet", name: "Free internet" },
  { id: "airportsh", name: "Free airport shuttle" },
  { id: "cancellation", name: "Free cancellation" },
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

  return (
    <div className=" w-full h-screen flex-col flex mt-10  mb-48 justify-start  px-20">
      <Searchbar />
      <div className="grid grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-4  py-7">
          <p className="text-2xl font-semibold">Filters</p>
          <div className="flex w-full flex-col justify-center items-center gap-5">
            <div className="flex w-full justify-between items-center">
              <p>Price</p>
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
              <p className="font-semibold">Rating</p>
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
              <p className="font-semibold">Freebies</p>
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
                <label key={freebie.id} className="flex items-center">
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
              <p className="font-semibold">Amenities</p>
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
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
