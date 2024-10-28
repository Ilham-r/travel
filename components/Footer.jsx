import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Button from "./Button";
const infos = {
  destinations: {
    title: "Our Destinations",
    items: ["Canada", "Alaska", "France", "Iceland"],
  },
  activities: {
    title: "Our Activities",
    items: [
      "Northern Lights",
      "Cruising & sailing",
      "Multi-activities",
      "Kayaking",
    ],
  },
  blogs: {
    title: "Travel Blogs",
    items: [
      "Bali Travel Guide",
      "Sri Lanka Travel Guide",
      "Peru Travel Guide",
      "Bali Travel Guide",
    ],
  },
  about: {
    title: "About Us",
    items: ["Our Story", "Work with us"],
  },
};

const Footer = () => {
  return (
    <footer className="flex w-full relative h-96 flex-col content-end justify-center items-center bg-mintgreen text-blackgreen p-20 ">
      <div className="flex  gap-6 absolute bottom-64 w-[87%] bg-[#CDEAE1] rounded-3xl  shadow-xl self-center  items-center justify-between p-7 h-fit max-lg:bottom-80">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-h2 font-bold pr-60">Subscribe Newsletter</p>
          <p className="text-lg font-semibold">The Travel</p>
          <p>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
              className="w-64 px-4 rounded-lg"
            />
            <Button title="Subscribe" />
          </div>
        </div>
        <img
          src="./images/post.png"
          alt="post"
          className="w-82 h-72 max-lg:hidden"
        />
      </div>
      <div className="flex w-full justify-center items-center gap-24 ">
        <div className="flex w-44 justify-center items-start flex-col gap-2">
          <img src="./images/logof.png" alt="logo" />
          <div>
            <FontAwesomeIcon icon={faFacebook} width={33} height={33} />
            <FontAwesomeIcon icon={faInstagram} width={33} height={33} />
            <FontAwesomeIcon icon={faTwitter} width={33} height={33} />
            <FontAwesomeIcon icon={faYoutube} width={33} height={33} />
          </div>
        </div>
        <div className="flex w-full justify-between items-start self-end max-lg:flex-wrap max-lg:gap-3">
          {Object.keys(infos).map((key) => (
            <div key={key}>
              <p className="text-lg font-semibold">{infos[key].title}</p>
              <ul>
                {infos[key].items.map((item, index) => (
                  <Link href="/">
                    <li key={index}>{item}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
