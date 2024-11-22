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

		// SPACE <-----------------------------

		const initialFormState = {
			name: '',
			attendance: '',
			average: '',
		};

		const formValues = ref({ ...initialFormState });

		const handleInputChange = e => (formValues.value[e.target.name] = e.target.value);

		const handleAddStudent = () => {
			const newStudent = {
				name: formValues.value.name,
				attendance: formValues.value.attendance,
				average: formValues.value.average,
			};

			students.value.unshift(newStudent);
			formValues.value = { ...initialFormState };
		};

		// SPACE <-----------------------------

		return {
			students,
			deleteStudent,
			// SPACE <-----------------------------

			formValues,
			handleInputChange,
			handleAddStudent,
		};
	},

	components: {
		StudentsList,
	},
};
</script>

<template>
	<main class="app-wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/add-student">Add Student</RouterLink>
		</nav>
		<RouterView v-bind:students v-bind:deleteStudent v-bind:formValues v-bind:handleInputChange v-bind:handleAddStudent />
		<!-- <StudentsList v-bind:students v-bind:deleteStudent /> -->
	</main>
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
