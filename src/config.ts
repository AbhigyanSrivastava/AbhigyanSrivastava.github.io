// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Facts I Just Made Up";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I ramble in 0s and 1s too.";
export const TWITTER_HANDLE = "@hilhilknavho";
export const MY_NAME = "PervySage";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
