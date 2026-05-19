import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/happytjh-electronic-log/",

  locales: {
    "/": {
      lang: "en-US",
      title: "HappyTJH's Electronic Log",
      description:
        "Research notes, project links, and AI agent workflows from a Fudan science student.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "HappyTJH 的电子日志",
      description: "复旦理工科学生的科研记录、项目链接与 AI agent 工作流。",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
