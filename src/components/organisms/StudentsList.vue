<script>
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';

export default {
	components: {
		StyledTitle,
		StudentsListItem,
	},

	props: {
		students: {
			type: Object,
		},
		deleteStudent: {
			type: Function,
		},
	},
};
</script>

<template>
	<StyledTitle>Students List</StyledTitle>
	<ul class="styled-list">
		<StudentsListItem v-bind:students v-bind:deleteStudent />
	</ul>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-list {
	list-style: none;
}
</style>
