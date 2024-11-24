import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-red-500 text-black py-3">
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-center gap-2 sm:gap-4 flex-wrap font-medium">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            GIRLS
          </Link>
          <Link className="navbar__link relative" href="#">
            BOYS
          </Link>
          <Link className="navbar__link relative" href="#">
            TOYS
          </Link>
          <Link className="navbar__link relative" href="#">
            SHOES
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
