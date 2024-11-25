<script lang="ts">
import { provide, ref } from 'vue';
import { students as studentsData } from '@/data/students';
import MainTemplate from '@/components/templates/MainTemplate.vue';

export default {
	components: {
		MainTemplate,
	},

	setup() {
		const students = ref(studentsData);

		const handleAddStudent = formValues => {
			const newStudent = {
				name: formValues.name,
				attendance: formValues.attendance,
				average: formValues.average,
			};

			students.value.unshift(newStudent);
		};

		const deleteStudent = name => {
			const filteredStudnets = students.value.filter(student => student.name !== name);
			students.value = filteredStudnets;
		};

		provide('students', students);
		provide('handleAddStudent', handleAddStudent);
		provide('deleteStudent', deleteStudent);
	},
};
</script>

<template>
	<MainTemplate>
		<main class="app-content-wrapper">
			<RouterView />
		</main>
	</MainTemplate>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.app-content-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	height: 100%;
	background-color: $light-grey;
}
</style>
