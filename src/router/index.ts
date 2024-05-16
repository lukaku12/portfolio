import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue'),
            name: 'home',
            meta: {title: '_hello'}
        },
        {
            path: '/about-me',
            component: () => import('@/views/AboutMe.vue'),
            name: 'about-me',
            meta: {title: '_about-me'}
        },
        {
            path: '/projects',
            component: () => import('@/views/projects/Index.vue'),
            name: 'projects.index',
            meta: {title: '_projects'}
        },
        {
            path: '/projects/:slug',
            component: () => import('@/views/projects/Show.vue'),
            name: 'projects.show',
            meta: {title: '_projects'}
        },
        {
            path: '/contact-me',
            component: () => import('@/views/ContactMe.vue'),
            name: 'contact-me',
            meta: {title: '_contact-me'}
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: {name: 'home'},
            name: 'not-found',
            meta: {title: '_not-found'}
        },
    ],
});

export default router;