import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '@/views/Dashboard.vue';
import AddStudent from '@/views/AddStudent.vue';

const routes = [
	{ path: '/', component: Dashboard },
	{ path: '/add-student', component: AddStudent },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
