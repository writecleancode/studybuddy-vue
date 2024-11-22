<script>
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StudentsList from '@/components/organisms/StudentsList.vue';

export default {
	components: {
		ViewWrapper,
		StudentsList,
	},

	props: {
		students: {
			type: Array,
		},
		deleteStudent: {
			type: Function,
		},
	},
};
</script>

<template>
	<ViewWrapper>
		<StudentsList v-bind:students v-bind:deleteStudent />
	</ViewWrapper>
</template>
