<script>
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StudentsList from '@/components/organisms/StudentsList.vue';
import { inject } from 'vue';

export default {
	components: {
		ViewWrapper,
		StudentsList,
	},

	setup() {
		const students = inject('students');

		return {
			students,
		};
	},
};
</script>

<template>
	<ViewWrapper>
		<StudentsList v-bind:students />
	</ViewWrapper>
</template>
