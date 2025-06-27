import { useState } from "react";

import type { NavigationItem } from "@/layouts/navigation.types";
import { NavItem } from "@/shared/components/common/NavItem";
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
