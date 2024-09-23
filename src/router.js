import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';
import AppProjects from './views/AppProjects.vue';
import AppSingleProject from './views/AppSingleProject.vue';
import AppNotFound from './views/AppNotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: AppHome
        },

        {
            path: "/about",
            name: "Su di me",
            component: AppAbout
        },

        {
            path: "/projects",
            name: "Progetti",
            component: AppProjects
        },

        // {
        //     path: "/contacts",
        //     name: "Contattami",
        //     component: AppContacts
        // },
        {
            path: "/projects/:slug",
            name: "project",
            component: AppSingleProject
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound
        },
    ]
});

export { router }