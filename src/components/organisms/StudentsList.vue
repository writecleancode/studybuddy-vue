<script>
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';
import { inject } from 'vue';

export default {
	components: {
		StyledTitle,
		StudentsListItem,
	},

	props: {
		students: {
			type: Array,
		},
	},
};
</script>

<template>
	<StyledTitle>Students List</StyledTitle>
	<ul class="styled-list">
		<StudentsListItem v-for="student in students" v-bind:student />
	</ul>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-list {
	list-style: none;
}
</style>
