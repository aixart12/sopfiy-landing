/** Production app (Next.js) — same host as marketing when deployed together */
export const APP_ORIGIN =
  import.meta.env.VITE_APP_ORIGIN ?? "https://sopsage.com";

export const paths = {
  login: `${APP_ORIGIN}/auth/login`,
  register: `${APP_ORIGIN}/auth/register`,
  demo: "https://demo.sopsage.com",
} as const;
