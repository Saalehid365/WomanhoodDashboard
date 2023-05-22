import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaDropbox,
  FaHome,
  FaSearchDollar,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-700 bottom-7 fixed w-4/5 h-16 rounded-md right-10 flex justify-between items-center text-3xl px-4 text-gray-400">
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
        <FaUser />
      </Link>
    </div>
  );
};

export default Navbar;
