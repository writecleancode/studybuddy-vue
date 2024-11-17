<script lang="ts">
import StudentsList from '@/components/StudentsList.vue';
import { students as studentsData } from '@/data/students';

export default {
	data() {
		const students = studentsData;

		return {
			students,
		};
	},

	components: {
		StudentsList,
	},
};
</script>

<template>
	<div>
		<h1>Students List</h1>
		<StudentsList v-bind:students />
	</div>
</template>

<style scoped></style>
