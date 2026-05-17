import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/happytjh-electronic-log/",

  lang: "en-US",
  title: "HappyTJH's Electronic Log",
  description:
    "Research notes, project links, and AI agent workflows from a Fudan science student.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
