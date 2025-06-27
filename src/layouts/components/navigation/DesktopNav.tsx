import React from "react";

import { NavDropdown } from "@/layouts/components/navigation/NavDropdown";
import { MAIN_NAVIGATION } from "@/layouts/navigation.constants";
import { NavItem } from "@/shared/components/common/NavItem";

const DesktopNav: React.FC = () => {
  const visibleItems = MAIN_NAVIGATION.filter((item) => item);

  return (
    <nav className='hidden flex-1 items-center justify-between gap-1 md:flex'>
      <div className='flex items-center gap-1'>
        {visibleItems.map((item) =>
          item.items ? (
            <NavDropdown key={item.id} item={item} />
          ) : (
            <NavItem key={item.id} {...item} variant='desktop' />
          )
        )}
      </div>
      <NavItem id='register' label='nav.register' routeKey='register' isCTA variant='desktop' />
    </nav>
  );
};

export { DesktopNav };
