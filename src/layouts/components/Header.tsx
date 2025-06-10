import React, { useState } from "react";

import { DesktopNav } from "@/layouts/components/navigation/DesktopNav";
import { MobileNav } from "@/layouts/components/navigation/MobileNav";
import { Logo } from "@/shared/components/common/Logo";
import { RemixIcons } from "@/shared/constants/icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className='sticky top-2 z-40 mx-2 max-w-3xl rounded-full bg-white/60 backdrop-blur-sm md:mx-auto lg:top-4'>
      <div className='flex items-center justify-between gap-3 px-2.5 py-2 md:gap-6'>
        <Logo className='flex-1 pl-2' />
        <div className='flex flex-1 items-center justify-end gap-1 border-l border-neutral-200 md:justify-start md:pl-3'>
          <DesktopNav />
          {/* <LanguageSwitcher /> */}
          <i className={`${RemixIcons.menu} text-xl md:hidden`} onClick={toggleMenu} />
        </div>
        <MobileNav isOpen={menuOpen} onClose={toggleMenu} />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
