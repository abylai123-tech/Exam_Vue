export const routes = [
  {
    name: "start",
    path: "/",
    component: () => import("../pages/Start.vue"),
    props: true,
  },
  {
    name: "quiz", 
    path: "/:id",
    component: () => import("../pages/Quiz.vue"), 
    props: true,
  },
  {
    name: "test",
    path: "/end/:points",
    component: () => import("../pages/End.vue"),
  },
];