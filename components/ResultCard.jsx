"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faMugHot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Button from "./Button";

const ResultCard = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="flex  w-full h-[300px] shadow-md  items-center text-blackgreen rounded-2xl overflow-hidden ease-in-out duration-300 hover:scale-95 ">
      <div className="h-full w-60 ">
        <img
          src="./images/paris.jpg"
          alt="paris"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex h-full flex-1 flex-col p-5 ">
        <div className="flex justify-between border-b-[1px] pb-4 border-gray-300">
          <div className="flex flex-col gap-3 w-[70%] ">
            <p className="text-3xl font-bold font-roboto ">
              CVK Park Bosphorus Hotel Istanbul
            </p>

            <p className="text-xs ">
              <FontAwesomeIcon icon={faLocationDot} className="pr-1" />
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </p>
            <div className="flex items-center justify-center">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-salmon"
                  key={i}
                />
              ))}
              <p className="pl-1 text-sm">5 start Hotel</p>
              <FontAwesomeIcon icon={faMugHot} className="pl-5 " />
              <p className=" text-sm pl-1">
                <span className="font-bold">20+</span> Aminities
              </p>
            </div>
            <div className="flex  gap-2 items-center">
              <div className="flex p-2 rounded-md border-2 border-mintgreen">
                4.2
              </div>
              <p className="text-sm">
                {" "}
                <span className="font-bold">Very Good</span> 371 reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col text-blackgreen ">
            <p>Starting from</p>
            <p className="text-salmon text-2xl font-bold opacity-100 ">
              $240<span className="text-xs font-bold">/night</span>
            </p>
            <p className="self-end">excl. tax</p>
          </div>
        </div>
        <div className="grid grid-cols-[53px_1fr] gap-4  pt-3 ">
          <div
            className="flex p-4 rounded-md border-2 cursor-pointer border-mintgreen"
            onClick={() => toggleHeart()}
          >
            <FontAwesomeIcon icon={isFilled ? faHeart : faHeartOutline} />
          </div>
          <Button title="View Place" color={true} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
