<script lang="ts">
import { ref } from 'vue';
import { students as studentsData } from '@/data/students';
import StudentsList from '@/components/organisms/StudentsList.vue';

export default {
	setup() {
		const students = ref(studentsData);

		const deleteStudent = name => {
			const filteredStudnets = students.value.filter(student => student.name !== name);
			students.value = filteredStudnets;
		};

		return {
			students,
			deleteStudent,
		};
	},

	components: {
		StudentsList,
	},
};
</script>

<template>
	<div class="app-wrapper">
		<StudentsList v-bind:students v-bind:deleteStudent />
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.app-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	min-height: 100vh;
	background-color: $light-grey;
}
</style>
