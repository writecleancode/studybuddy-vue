<script>
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StudentsList from '@/components/organisms/StudentsList.vue';

export default {
	components: {
		ViewWrapper,
		StudentsList,
	},
};
</script>

<template>
	<ViewWrapper>
		<StudentsList />
	</ViewWrapper>
</template>
