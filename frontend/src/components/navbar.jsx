import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaDropbox,
  FaHome,
  FaRegCalendarAlt,
  FaSearchDollar,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-600 bottom-7 fixed w-4/5 h-16 rounded-xl right-10 flex justify-between items-center text-3xl px-4 text-gray-400">
      <Link className="">
        <FaHome />
      </Link>
      <Link className="">
        <FaSearchDollar />
      </Link>
      <Link className="bg-black p-3 rounded-md">
        <FaDropbox />
      </Link>
      <Link className="">
        <FaClipboardList />
      </Link>
      <Link className="">
        <FaRegCalendarAlt />
      </Link>
    </div>
  );
};

export default Navbar;
