import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { NavDropdown } from "@/layouts/components/navigation/NavDropdown";
import { MAIN_NAVIGATION } from "@/layouts/navigation.constants";
import { NavItem } from "@/shared/components/common/NavItem";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";
import { SOCIALS } from "@/shared/constants/socials";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const floatUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setMounted(true);
    } else {
      document.body.style.overflow = "unset";
      setMounted(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm'>
      <div
        className={`bg-default-white absolute inset-0 flex flex-col items-center justify-start p-6 transition-all duration-300 ease-out ${
          mounted ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 cursor-pointer rounded-full hover:text-neutral-400'
          aria-label='Close menu'
        >
          <i className={`${RemixIcons.close} text-3xl`} />
        </button>

        <motion.nav
          variants={menuContainer}
          initial='hidden'
          animate='show'
          className='flex flex-col items-center px-6 py-10'
        >
          {MAIN_NAVIGATION.map((item) =>
            item.items ? (
              <motion.div key={item.id} variants={floatUpItem}>
                <NavDropdown item={item} isMobile />
              </motion.div>
            ) : (
              <motion.div key={item.id} variants={floatUpItem}>
                <NavItem key={item.id} {...item} />
              </motion.div>
            )
          )}
          <motion.div variants={floatUpItem}>
            <NavItem id='register' label='nav.register' routeKey='register' />
          </motion.div>

          <motion.div variants={floatUpItem} className='mt-16'>
            <Text variant='caption' color='secondary'>
              Follow us
            </Text>
          </motion.div>
          {SOCIALS.map((social) => (
            <motion.div key={social.id} variants={floatUpItem} className='mt-2'>
              <Text>
                {social.name} <i className={RemixIcons.arrowRightUp} />
              </Text>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </div>,
    document.body
  );
};

export { MobileNav };
