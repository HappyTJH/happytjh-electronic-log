import { navbar } from "vuepress-theme-hope";

export default navbar([
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
