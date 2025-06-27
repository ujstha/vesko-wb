import AboutHero from "@/assets/images/about_hero.avif";
import BRMD1 from "@/assets/images/b_rmd_1.avif";
import BRMD2 from "@/assets/images/b_rmd_2.avif";
import BRMD3 from "@/assets/images/b_rmd_3.avif";
import BRMD4 from "@/assets/images/b_rmd_4.avif";
import BRMD5 from "@/assets/images/b_rmd_5.avif";
import BRMD6 from "@/assets/images/b_rmd_6.avif";
import Connected from "@/assets/images/connected.avif";
import DifferentKindOfSocialMedia from "@/assets/images/different_social_media.png";
import FamiliarDesign from "@/assets/images/familiar_design.png";
import ForPeopleHero from "@/assets/images/for_people_hero.avif";
import HeroDesktop from "@/assets/images/hero_desktop.png";
import HeroMobile from "@/assets/images/hero_mobile.png";
import Neutral from "@/assets/images/neutral.avif";
import Omnistore from "@/assets/images/omnistore.jpg";
import Onlinestore from "@/assets/images/onlinestore.avif";
import SafePlace from "@/assets/images/safe_place.jpg";
import SpaceDigital from "@/assets/images/space_digital.png";
import TRMD1 from "@/assets/images/t_rmd_1.avif";
import TRMD2 from "@/assets/images/t_rmd_2.avif";
import TRMD3 from "@/assets/images/t_rmd_3.avif";
import TRMD4 from "@/assets/images/t_rmd_4.avif";
import TRMD5 from "@/assets/images/t_rmd_5.avif";
import TRMD6 from "@/assets/images/t_rmd_6.avif";
import VeskoBg from "@/assets/images/vesko_bg.webp";
import VeskoBg1 from "@/assets/images/vesko_bg_split_1.webp";
import VeskoBg2 from "@/assets/images/vesko_bg_split_2.webp";
import VeskoBg3 from "@/assets/images/vesko_bg_split_3.webp";
import YouFeelFree from "@/assets/images/you_feel_free.png";
import VeskoLogo from "@/assets/logos/vesko.PNG";
import VeskoLogoLight from "@/assets/logos/vesko_light.PNG";
import UnboxingVideo from "@/assets/videos/v-2.mp4";

// ForOfflineVendorPage assets - using existing images
import ProductOnTable from "@/assets/images/omnistore.jpg";
import InventoryManagement from "@/assets/images/omnistore.jpg";
import VeskoStore from "@/assets/images/omnistore.jpg";
import MobileAppMockup from "@/assets/images/hero_mobile.png";
import POSSystem from "@/assets/images/omnistore.jpg";
import ShippingLabel from "@/assets/images/omnistore.jpg";
import DeliveryTruck from "@/assets/images/omnistore.jpg";
import StoreDashboard from "@/assets/images/omnistore.jpg";

export const Assets = {
  logo: VeskoLogo,
  logoLight: VeskoLogoLight,
  heroMobile: HeroMobile,
  heroDesktop: HeroDesktop,
  spaceDigital: SpaceDigital,
  veskoBg: VeskoBg,
  veskoBg1: VeskoBg1,
  veskoBg2: VeskoBg2,
  veskoBg3: VeskoBg3,
  safePlace: SafePlace,
  connected: Connected,
  neutral: Neutral,
  omnistore: Omnistore,
  onlinestore: Onlinestore,
  unboxingVideo: UnboxingVideo,
  forPeopleHero: ForPeopleHero,
  differentKindOfSocialMedia: DifferentKindOfSocialMedia,
  youFeelFree: YouFeelFree,
  familiarDesign: FamiliarDesign,
  aboutHero: AboutHero,
  bRmd1: BRMD1,
  bRmd2: BRMD2,
  bRmd3: BRMD3,
  bRmd4: BRMD4,
  bRmd5: BRMD5,
  bRmd6: BRMD6,
  tRmd1: TRMD1,
  tRmd2: TRMD2,
  tRmd3: TRMD3,
  tRmd4: TRMD4,
  tRmd5: TRMD5,
  tRmd6: TRMD6,

  // ForOfflineVendorPage assets
  productOnTable: ProductOnTable,
  inventoryManagement: InventoryManagement,
  veskoStore: VeskoStore,
  mobileAppMockup: MobileAppMockup,
  posSystem: POSSystem,
  shippingLabel: ShippingLabel,
  deliveryTruck: DeliveryTruck,
  storeDashboard: StoreDashboard,
};

export type AssetKey = keyof typeof Assets;
