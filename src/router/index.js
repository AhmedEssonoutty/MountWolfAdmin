import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/auth/SignIn.vue"),
      meta: { title: "Sign In" },
      beforeEnter: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem("loggedin"));
        if (!user) {
          next();
        } else {
          next("/");
        }
      },
    },
    {
      path: "/",
      name: "overview",
      component: () => import("../views/Overview.vue"),
      meta: { title: "Overview" },
    },
    {
      path: "/dashboard/Vendors",
      name: "vendors",
      component: () => import("@/views/Vendors.vue"),
      meta: { title: "Vendors" },
    },
    {
      path: "/dashboard/Payment",
      name: "payment",
      component: () => import("@/views/Payment.vue"),
      meta: { title: "Payments" },
    },
    {
      path: "/dashboard/Admins",
      name: "admin",
      component: () => import("@/views/Admins.vue"),
      meta: { title: "Admins" },
    },
    {
      path: "/dashboard/Support",
      name: "support",
      component: () => import("@/views/TechnichalSupport.vue"),
      meta: { title: "Technichal support" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not-found",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  beforeEnter: (to, from, next) => {
    const user = JSON.parse(localStorage.getItem("loggedin"));
    if (user) {
      next();
    } else {
      next("/signin");
    }
  },
});

export default router;
