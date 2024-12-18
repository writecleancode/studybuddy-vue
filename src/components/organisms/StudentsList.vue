<script lang="ts">
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';

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
		<StudentsListItem v-for="student in students" :student :key="student.name" />
	</ul>
</template>

<style lang="scss" scoped>
.styled-list {
	list-style: none;
}
</style>
