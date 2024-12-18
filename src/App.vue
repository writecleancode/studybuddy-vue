<script lang="ts">
import MainTemplate from '@/components/templates/MainTemplate.vue';

import { useStudentsProvider } from './providers/useStudents';

export default {
	components: {
		MainTemplate,
	},

	setup() {
		useStudentsProvider();
	},
};
</script>

<template>
	<MainTemplate>
		<main class="app-content-wrapper">
			<RouterView />
		</main>
	</MainTemplate>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.app-content-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	height: 100%;
	background-color: $light-grey;
}
</style>
