import localFont from "@next/font/local";

export const isDev = process.env.NODE_ENV !== "production";

export const FontDefault = localFont({
  src: [
    {
      path: "./../assets/fonts/wotfard-regular.woff2",
      weight: "400",
    },
    {
      path: "./../assets/fonts/wotfard-medium.woff2",
      weight: "500",
    },
    {
      path: "./../assets/fonts/wotfard-semibold.woff2",
      weight: "600",
    },
  ],
  display: "swap",
});

export const endpointGraphql = process.env.NEXT_HYGRAPH_API;
