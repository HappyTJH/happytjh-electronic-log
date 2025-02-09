import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "Model", icon: "pen-to-square", link: "Model" },
      {
        text: "replica_fudan_igem2024",
        icon: "pen-to-square",
        prefix: "replica_fudan_igem2024/",
        children: [
          { 
            text: "Project", 
            icon: "pen-to-square", 
            link: "Project/" },
          { 
            text: "Technology", 
            icon: "pen-to-square", 
            link: "Technology/" },
          { 
            text: "Community", 
            icon: "pen-to-square", 
            link: "Community/" },
          { 
            text: "Team", 
            icon: "pen-to-square", 
            link: "Team/" },
        ],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
