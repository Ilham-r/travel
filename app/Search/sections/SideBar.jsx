import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import MultiSlider from "./MultiSlider";
import { freebiesList, amenitiesList } from "@/public/images/utilities/data";

const SideBar = () => {
  const [priceRange, setPriceRange] = useState([50, 1200]);
  const [openSection, setOpenSection] = useState({
    price: true,
    rating: true,
    freebies: true,
    amenities: true,
  });
  const [ratin, setRatin] = useState([]);

  const toggleSection = (section) => {
    setOpenSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const [selectedFreebies, setSelectedFreebies] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleSelected = (newitem, section) => {
    if (section == "rating") {
      if (ratin.includes(newitem)) {
        setRatin((prevrates) => prevrates.filter((rate) => rate !== newitem));
      } else {
        setRatin((prev) => [...prev, newitem]);
      }
    } else {
      if (section == "freebies") {
        if (selectedFreebies.includes(newitem)) {
          setSelectedFreebies((previtems) =>
            previtems.filter((item) => item !== newitem)
          );
        } else {
          setSelectedFreebies((prev) => [...prev, newitem]);
        }
      } else {
        if (selectedAmenities.includes(newitem)) {
          setSelectedAmenities((previtems) =>
            previtems.filter((item) => item !== newitem)
          );
        } else {
          setSelectedAmenities((prev) => [...prev, newitem]);
        }
      }
    }
  };
  console.log("freebies", selectedFreebies);
  console.log("Amenties", selectedAmenities);
  console.log("rating", ratin);
  const [showAll, setShowAll] = useState(false);
  const handleToggleAmenities = () => {
    setShowAll((prev) => !prev);
  };
  const visibleAmenities = showAll ? amenitiesList : amenitiesList.slice(0, 4);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-semibold">Filters</p>

      {/* Price Section */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold">Price</p>
          <FontAwesomeIcon
            icon={openSection["price"] ? faAngleUp : faAngleDown}
            className="cursor-pointer"
            onClick={() => toggleSection("price")}
          />
        </div>
        {openSection["price"] && (
          <div>
            <MultiSlider
              setPriceRange={setPriceRange}
              priceRange={priceRange}
            />
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold">Rating</p>
          <FontAwesomeIcon
            icon={openSection["rating"] ? faAngleUp : faAngleDown}
            className="cursor-pointer"
            onClick={() => toggleSection("rating")}
          />
        </div>
        {openSection["rating"] && (
          <ul className="flex gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <li
                key={i}
                className="border-2 border-mintgreen cursor-pointer hover:bg-mintgreen"
              >
                <input
                  type="checkbox"
                  id={`check_${i}`}
                  className="peer hidden"
                />
                <label
                  className="p-3 inline-block border-2 border-transparent cursor-pointer peer-checked:bg-mintgreen peer-checked:text-white peer-checked:border-white"
                  htmlFor={`check_${i}`}
                  onClick={() => handleSelected(i, "rating")}
                >
                  {i}+
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Freebies Section */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold">Freebies</p>
          <FontAwesomeIcon
            icon={openSection["freebies"] ? faAngleUp : faAngleDown}
            className="cursor-pointer"
            onClick={() => toggleSection("freebies")}
          />
        </div>
        {openSection["freebies"] && (
          <div className="flex flex-col gap-2">
            {freebiesList.map((freebie, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-2"
                  onClick={() => handleSelected(freebie, "freebies")}
                />
                {freebie}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Amenities Section */}
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold">Amenities</p>
          <FontAwesomeIcon
            icon={openSection["amenities"] ? faAngleUp : faAngleDown}
            className="cursor-pointer"
            onClick={() => toggleSection("amenities")}
          />
        </div>
        {openSection["amenities"] && (
          <div className="flex flex-col items-start gap-2">
            {visibleAmenities.map((amenity, index) => (
              <label key={index} className="flex items-center text-base">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-2"
                  onClick={() => handleSelected(amenity, "amenities")}
                />
                {amenity}
              </label>
            ))}
            {!showAll ? (
              <button onClick={handleToggleAmenities} className="text-red-500">
                +{amenitiesList.length - visibleAmenities.length} more
              </button>
            ) : (
              <button onClick={handleToggleAmenities} className="text-red-500">
                Show less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
