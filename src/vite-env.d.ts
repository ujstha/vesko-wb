/// <reference types="vite/client" />

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
