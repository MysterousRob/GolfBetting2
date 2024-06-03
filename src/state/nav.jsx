import React from "react";
import { Link } from 'react-router-dom';
import './../main';

export let navOptions = [
   {
      href: "/",
      title: "Home",
    },
    {
      href: "/Week",
      title: "Bets of the Week",
    },
    {
      href: "/Tips",
      title: "Golf Betting Tips",
    },
    {
      href: "/Odds",
      title: "Live-Odds",
    },
     {
      href: "/Sites",
      title: "Golf Betting Sites",
    },
]


const Nav = () => {
  return (
    <nav className="flex flex-row gap-4">
    {navOptions.map((nav, i) => (
      <Link 
        key={i} 
        to={nav.href} 
        className="no-underline text-white border border-transparent px-2 py-1 hover:border-white transition duration-500 rounded"
        style={{ textDecoration: 'none', display: 'inline-block', padding: '8px'}} 
      >
        <p className="border border-transparent p-1 hover:border-white transition duration-500 rounded">
          {nav.title}
        </p>
      </Link>
    ))}
  </nav>
  );
};

export default Nav;
// quickLink2 component
// export const quickLink2 = () => {
//   return (
//     <>
//       {quickLinks.map((nav, i) => (
//         <Link key={i} to={nav.href}>
//           <p>
//             {nav.title}
//           </p>
//         </Link>
//       ))}
//     </>
//   );
// };