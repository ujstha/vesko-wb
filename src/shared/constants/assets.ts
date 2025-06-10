import Connected from "@/assets/images/connected.avif";
import HeroDesktop from "@/assets/images/hero_desktop.png";
import HeroMobile from "@/assets/images/hero_mobile.png";
import Neutral from "@/assets/images/neutral.avif";
import Omnistore from "@/assets/images/omnistore.jpg";
import Onlinestore from "@/assets/images/onlinestore.avif";
import SafePlace from "@/assets/images/safe_place.jpg";
import SpaceDigital from "@/assets/images/space_digital.png";
import VeskoBg from "@/assets/images/vesko_bg.webp";
import VeskoBg1 from "@/assets/images/vesko_bg_split_1.webp";
import VeskoBg2 from "@/assets/images/vesko_bg_split_2.webp";
import VeskoBg3 from "@/assets/images/vesko_bg_split_3.webp";
import VeskoLogo from "@/assets/logos/vesko.png";
import VeskoLogoLight from "@/assets/logos/vesko_light.png";
import UnboxingVideo from "@/assets/videos/v-2.mp4";

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
};

export type AssetKey = keyof typeof Assets;
