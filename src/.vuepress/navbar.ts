import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/projects.html",
  "/agent-tasks.html",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "yeast_simulation_app", icon: "material-symbols:hive", link: "yeast_simulation_app" },
      {
        text: "Model Progress in Winter Holiday",
        icon: "pen-to-square",
        prefix: "Model_progress in winter holiday/",
        children: [
          { 
            text: "Model Conception_Fudan iGEM 2025", 
            icon: "pen-to-square", 
            link: "Model Conception_Fudan iGEM 2025" },
          { 
            text: "Model_learning", 
            icon: "pen-to-square", 
            link: "Model_learning" },
        ],
      },
      {
        text: "replica_fudan_igem2024",
        icon: "pen-to-square",
        prefix: "replica_fudan_igem2024/",
        children: [
          { 
            text: "Project", 
            icon: "material-symbols:kid-star", 
            link: "Project/" },
          { 
            text: "Technology", 
            icon: "material-symbols:genetics-rounded", 
            link: "Technology/" },
          { 
            text: "Community", 
            icon: "material-symbols:globe-asia", 
            link: "Community/" },
          { 
            text: "Team", 
            icon: "material-symbols:groups-outline-rounded", 
            link: "Team/" },
        ],
      },
    ],
  },
  "/intro.html",
]);

export const zhNavbar = navbar([
  "/zh/",
  "/zh/projects.html",
  "/zh/agent-tasks.html",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "Yeast Simulation App", icon: "material-symbols:hive", link: "yeast_simulation_app" },
      {
        text: "寒假建模进展",
        icon: "pen-to-square",
        prefix: "Model_progress in winter holiday/",
        children: [
          {
            text: "Fudan iGEM 2025 建模构想",
            icon: "pen-to-square",
            link: "Model Conception_Fudan iGEM 2025",
          },
          {
            text: "模型学习",
            icon: "pen-to-square",
            link: "Model_learning",
          },
        ],
      },
      {
        text: "复刻 Fudan iGEM 2024",
        icon: "pen-to-square",
        prefix: "replica_fudan_igem2024/",
        children: [
          {
            text: "项目",
            icon: "material-symbols:kid-star",
            link: "Project/",
          },
          {
            text: "技术",
            icon: "material-symbols:genetics-rounded",
            link: "Technology/",
          },
          {
            text: "社区",
            icon: "material-symbols:globe-asia",
            link: "Community/",
          },
          {
            text: "团队",
            icon: "material-symbols:groups-outline-rounded",
            link: "Team/",
          },
        ],
      },
    ],
  },
  "/zh/intro.html",
]);

export default enNavbar;
