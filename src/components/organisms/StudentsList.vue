<script>
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';

export default {
	components: {
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
	<div class="wrapper">
		<ul class="styled-list">
			<StudentsListItem v-bind:students v-bind:deleteStudent />
		</ul>
	</div>
</template>

<style scoped>
.wrapper {
	margin: 25px;
	padding: 32px 64px;
	border-radius: 25px;
	width: 100%;
	max-width: 500px;
	/* background-color: ${({ theme }) => theme.colors.white}; */
	background-color: #fff;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
}

.styled-list {
	list-style: none;
}
</style>
