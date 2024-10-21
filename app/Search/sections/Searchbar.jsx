"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
const customStyles = {
  option: (provided) => ({
    ...provided,
    height: 35,
    display: "flex",
    alignItems: "center",
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    paddingTop: "0.70rem",

    paddingLeft: "3rem",
    paddingRight: "1rem",
    width: "16rem",
    cursor: "pointer",

    "&:hover": {
      borderColor: "#3b82f6",
    },
  }),
};

const options = [
  { value: "1", label: "1 room, 2 guests" },
  { value: "2", label: "1 room, 3 guests" },
  { value: "3", label: "2 room, 4 guests" },
];

const Searchbar = () => {
  return (
    <div className="flex p-5 shadow-lg rounded-lg ">
      {" "}
      <form
        action="/"
        method="post"
        className="flex gap-3 justify-center  items-center flex-wrap"
      >
        <div class="relative cursor-pointer ">
          <p className="absolute text-gray-500 bg-white bottom-10 left-5">
            Enter Destination
          </p>
          <input
            type="text"
            placeholder="istanbul, Turkey"
            class="border border-gray-300 rounded-lg py-3 pl-12 pr-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-black">
            <FontAwesomeIcon icon={faBed} width={30} height={30} />
          </span>
        </div>
        <div class="relative ">
          <p className="absolute text-gray-500 bg-white bottom-10 left-5">
            Check in
          </p>

          <input
            type="date"
            name="checkin"
            id="checkin"
            class="border border-gray-300 rounded-lg py-3 pl-12 pr-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="relative ">
          <p className="absolute text-gray-500 bg-white bottom-10 left-5">
            Check out
          </p>

          <input
            type="date"
            name="checkout"
            id="checkout"
            class="border border-gray-300 rounded-lg py-3 pl-12 pr-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="relative  ">
          <p className="absolute z-10 text-gray-500 bg-white bottom-10 left-5">
            Guests
          </p>

          <Select options={options} styles={customStyles} />
          <span class="absolute  left-2 top-1/2 transform -translate-y-1/2 text-black">
            <FontAwesomeIcon icon={faUser} width={30} height={30} />
          </span>
        </div>
        <FontAwesomeIcon
          icon={faSearch}
          width={30}
          height={30}
          className="bg-mintgreen px-3 py-4 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Searchbar;
