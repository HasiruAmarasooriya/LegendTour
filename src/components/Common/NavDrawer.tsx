import React from 'react';
import Link from 'next/link';

type NavDrawerProps = {
  items: string[];
};

const NavDrawer: React.FC<NavDrawerProps> = ({ items }) => {
  return (
    <div className="absolute top-[38px] right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
      <ul className="py-1">
        {items.map((subItem) => (
          <li key={subItem}>
            <Link href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              {subItem}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDrawer;
