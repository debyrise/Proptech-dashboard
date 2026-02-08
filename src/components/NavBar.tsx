import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { House, User,ScrollText,ListChecks, SquareMenu, BoomBox 
 } from 'lucide-react';
import Budgeting from "../assets/Budgeting (1).svg";
import calender from "../assets/Calendar (1).svg"
import logo from '../assets/Logo.svg'
import market from '../assets/Marketplace.svg'
import payout from '../assets/Payout Center.svg'
import activity from '../assets/Activity Log.svg'





const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Top green bar */}
      <div className="flex items-center justify-between bg-[#105b48] px-4 md:px-6 py-4 text-white">
        <div className="flex items-center gap-2 font-semibold text-lg">
            <img src={logo} alt=""/>

        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link to={"/Budgeting"}>
            <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
              <img src={Budgeting} alt="" />

            </div>
          </Link>

          <Link to={"/Calender"}>
            <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
              <img src={calender} alt=""/>
            </div>
          </Link>

          

           <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
             <img src={activity} alt=""/>

          </div>


          <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
          <img src={payout} alt=""/>

          </div>

          <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
          <img src={market} alt=""/>

          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#105b48] font-bold">
            D
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#105b48] text-white flex flex-col gap-2 px-4 py-2">
          <Link to={"/Budgeting"}>
            <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
              <img src={Budgeting} alt="" />

            </div>
          </Link>

          <Link to={"/Calender"}>
            <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
              <img src={calender} alt=""/>
            </div>
          </Link>

          <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
             <img src={calender} alt=""/>

          </div>

           <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
             <img src={activity} alt=""/>

          </div>


          <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
          <img src={payout} alt=""/>

          </div>

          <div className="p-2 rounded-full hover:bg-[#0e4c3d] transition">
          <img src={market} alt=""/>

          </div>
        </div>
      )}

      {/* Main nav */}
      <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-6 bg-white px-4 md:px-6 py-3 shadow-sm">
        {/* Dashboard with arrow */}
        <div
          className="flex md:hidden items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:text-white hover:bg-[#105b48] cursor-pointer"
          onClick={() => setDashboardOpen(!dashboardOpen)}
        >
          <House /> Dashboard {dashboardOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {dashboardOpen && (
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 w-full md:w-auto md:hidden ">
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
            <BoomBox />
            Listings
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
              <User />
            Users
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
                        <SquareMenu />
                      Request
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
                <ScrollText />
             Applications
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
                <ListChecks /> Tasks
          </div>
        </div>
        )}

        <div className="hidden  md:flex items-center gap-2  w-full  justify-between">
             <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
              <House /> Dashboard          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
            <BoomBox />
            Listings
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
            <User /> Users
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
            <SquareMenu />
            Request
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
                <ScrollText />
                 Applications
          </div>
          <div className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-[#105b48] hover:text-white cursor-pointer">
                <ListChecks /> Tasks
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
