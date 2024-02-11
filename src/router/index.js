import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/home",
        name: "HomePage",
        component: () => import("@/components/HomePage.vue"),
    },
    {
        path: "/testcomponent",  // TestComponent.vue로 이동할 Path
        name: "TestComponent",  // router name
        component: () => import("@/components/TestComponent.vue"),  // Path로 이동될 Component
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;