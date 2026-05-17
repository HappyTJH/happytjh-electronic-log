import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Projects",
      icon: "folder-open",
      link: "projects",
    },
    {
      text: "Agent Tasks",
      icon: "list-check",
      link: "agent-tasks",
    },
    {
      text: "Posts",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
