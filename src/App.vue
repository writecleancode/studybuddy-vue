<script lang="ts">
import { ref } from 'vue';
import { students as studentsData } from '@/data/students';
import MainTemplate from '@/components/templates/MainTemplate.vue';

export default {
	components: {
		MainTemplate,
	},

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
};
</script>

<template>
	<MainTemplate>
		<main class="app-content-wrapper">
			<RouterView v-bind:students v-bind:deleteStudent v-bind:formValues v-bind:handleInputChange v-bind:handleAddStudent />
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
