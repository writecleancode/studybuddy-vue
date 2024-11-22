import { createMemoryHistory, createRouter } from 'vue-router';

import StudentsList from '@/components/organisms/StudentsList.vue';
import Form from '@/components/organisms/Form.vue';

const routes = [
	{ path: '/', component: StudentsList },
	{ path: '/add-student', component: Form },
];

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
});
