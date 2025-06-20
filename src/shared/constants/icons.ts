export const RemixIcons = {
  arrowRightUp: "ri-arrow-right-up-line",
  arrowDown: "ri-arrow-down-wide-line",
  menu: "ri-menu-3-line",
  close: "ri-close-line",
  home: "ri-home-4-line",
  user: "ri-user-3-line",
  settings: "ri-settings-3-line",
  securePayment: "ri-secure-payment-line",
  truck: "ri-truck-line",
  email: "ri-mail-line",
  userCommunity: "ri-user-community-line",

  // social icons
  instagram: "ri-instagram-line",
  facebook: "ri-facebook-line",
  tiktok: "ri-tiktok-line",
  linkedin: "ri-linkedin-line",
} as const;

export type RemixIconName = keyof typeof RemixIcons;
