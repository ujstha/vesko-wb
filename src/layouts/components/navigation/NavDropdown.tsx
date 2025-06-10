// import { useState } from "react";

// import { NavItem } from "./NavItem";

// import type { NavigationItem } from "@/layouts/navigation.types";

// interface NavDropdownProps {
//   item: NavigationItem;
//   isMobile?: boolean;
// }

// const NavDropdown: React.FC<NavDropdownProps> = ({ item, isMobile = false }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     if (isMobile) {
//       setIsOpen((prev) => !prev);
//     }
//   };

//   return (
//     <div className={`w-full ${isMobile ? "group" : "group"}`}>
//       <div
//         className={`flex w-full items-center justify-between ${isMobile ? "px-4 py-2" : ""}`}
//         onClick={toggleMobileMenu}
//       >
//         <NavItem {...item} asDropdown className='w-full' />
//       </div>

//       <div
//         className={`flex-col gap-1 overflow-hidden transition-all duration-300 ${
//           isMobile
//             ? isOpen
//               ? "flex max-h-[500px] py-1"
//               : "hidden max-h-0"
//             : "absolute top-full left-0 z-50 hidden min-w-[160px] rounded-md bg-white p-2 text-black shadow-md group-hover:flex"
//         }`}
//       >
//         {item.children?.map((subItem) => (
//           <NavItem
//             key={subItem.id}
//             {...subItem}
//             className={`${
//               isMobile ? "w-full px-6 py-2 text-left text-white" : "px-4 py-2 text-black"
//             } whitespace-nowrap hover:bg-neutral-100`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export { NavDropdown };

import { useState } from "react";

import { NavItem } from "./NavItem";

import type { NavigationItem } from "@/layouts/navigation.types";
import { RemixIcons } from "@/shared/constants/icons";

interface NavDropdownProps {
  item: NavigationItem;
  isMobile?: boolean;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ item, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div
      className='group relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={toggleDropdown}
    >
      <NavItem
        key={item.id}
        {...item}
        variant={isMobile ? "default" : "desktop"}
        onClick={toggleDropdown}
      >
        <i className={RemixIcons.arrowDown} />
      </NavItem>
      <div
        className={`absolute top-full z-50 min-w-36 rounded-md border border-neutral-200 bg-white py-2 ${isOpen ? "block" : "hidden"}`}
      >
        {item.items?.map((subItem) => (
          <NavItem
            key={subItem.id}
            {...subItem}
            variant='desktop'
            className='w-full justify-start rounded-none decoration-0 hover:bg-neutral-100'
          />
        ))}
      </div>
    </div>
  );
};

export { NavDropdown };
