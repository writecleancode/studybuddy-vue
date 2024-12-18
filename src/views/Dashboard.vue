<script lang="ts">
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StudentsList from '@/components/organisms/StudentsList.vue';

import { useStudentsContext } from '@/providers/useStudents';

export default {
	components: {
		ViewWrapper,
		StudentsList,
	},

	setup() {
		const { students } = useStudentsContext();

		return {
			students,
		};
	},
};
</script>

<template>
	<ViewWrapper>
		<StudentsList :students />
	</ViewWrapper>
</template>
