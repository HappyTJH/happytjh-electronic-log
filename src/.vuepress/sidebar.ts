import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Projects",
      icon: "folder-open",
      prefix: "/",
      children: [
        "projects",
        "fudan-igem-2025",
      ],
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

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "科研项目",
      icon: "folder-open",
      prefix: "/zh/",
      children: [
        "projects",
        "fudan-igem-2025",
      ],
    },
    {
      text: "Agent 任务板",
      icon: "list-check",
      link: "agent-tasks",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "/posts/",
      children: "structure",
    },
    "intro",
  ],
});

export default enSidebar;
