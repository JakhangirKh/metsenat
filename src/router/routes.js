export default [
  {
    path: "/",
    meta: {
      layout: "default",
      auth: true,
      single: false,
    },
    redirect: "/dashboard",
    component: () => import("@/pages/PHome.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("@/pages/PDashboard.vue"),
      },
      {
        path: "homiylar",
        component: () => import("@/pages/PSponsors.vue"),
      },
      {
        path: "talabalar",
        component: () => import("@/pages/PStudents.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/pages/PLogin.vue"),
    meta: {
      layout: "auth",
      auth: false,
      single: false,
    },
    
  },
  {
    path: "/homiylar/single",
    component: () => import("@/pages/PSponsorsInfo.vue"),
    meta: {
      layout: "default",
      auth: true,
      single: false,
    }
  },
  {
    path: "/filter",
    component: () => import("@/components/base/CModal.vue"),
    
  }
];
