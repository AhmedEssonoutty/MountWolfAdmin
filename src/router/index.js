import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth/auth";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/auth/SignIn.vue"),
      meta: { title: "Sign In", auth: false },
    },
    {
      path: "/",
      name: "overview",
      component: () => import("../views/Overview.vue"),
      meta: { title: "Overview", auth: true },
    },
    {
      path: "/dashboard/Vendors",
      name: "vendors",
      component: () => import("@/views/Vendors.vue"),
      meta: { title: "Vendors", auth: true },
    },
    {
      path: "/dashboard/Payment",
      name: "payment",
      component: () => import("@/views/Payment.vue"),
      meta: { title: "Payments", auth: true },
    },
    {
      path: "/dashboard/Admins",
      name: "admin",
      component: () => import("@/views/AdminsPage.vue"),
      meta: { title: "Admins", auth: true },
    },
    {
      path: "/dashboard/Support",
      name: "support",
      component: () => import("@/views/TechnichalSupport.vue"),
      meta: { title: "Technichal support", auth: true },
    },
    {
      path: "/dashboard/About-vendor",
      name: "about",
      component: () => import("@/views/AboutVendor.vue"),
      meta: { title: "About Vendor", auth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Not-found",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.afterEach((to, from, next) => {
  if (to.fullPath != from.fullPath) {
    window.scrollTo(0, 0);
  }
});

router.beforeEach((to, from, next) => {
  const { isLoggedin } = storeToRefs(useAuthStore());
  const isAuthenticated = isLoggedin.value;

  if (to.meta.auth && !isAuthenticated) {
    next("/signin");
  } else if (!to.meta.auth && isAuthenticated && to.path === "/signin") {
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mount Wolf Menus";
  next();
});

export default router;
