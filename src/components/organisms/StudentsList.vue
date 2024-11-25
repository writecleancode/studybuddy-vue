<script>
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';
import { inject } from 'vue';

export default {
	components: {
		StyledTitle,
		StudentsListItem,
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
	<StyledTitle>Students List</StyledTitle>
	<ul class="styled-list">
		<StudentsListItem v-bind:students />
	</ul>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-list {
	list-style: none;
}
</style>
