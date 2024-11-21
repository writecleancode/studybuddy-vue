<script>
import StudentsListItem from '@/components/molecules/StudentsListItem.vue';
import FormField from '@/components/molecules/FormField.vue';
import StyledButton from '@/components//atoms/StyledButton.vue';
import { ref } from 'vue';

export default {
	components: {
		FormField,
		StudentsListItem,
		StyledButton,
	},

	props: {
		students: {
			type: Object,
		},
		deleteStudent: {
			type: Function,
		},
	},

	setup({ students }) {
		const initialFormState = {
			name: '',
			attendance: '',
			average: '',
		};

		const formValues = ref({ ...initialFormState });

		const handleInputChange = e => (formValues.value[e.target.name] = e.target.value);

		const handleAddUser = () => {
			const newStudent = {
				name: formValues.value.name,
				attendance: formValues.value.attendance,
				average: formValues.value.average,
			};

			students.unshift(newStudent);
			formValues.value = { ...initialFormState };
		};

		return {
			formValues,
			handleInputChange,
			handleAddUser,
		};
	},
};
</script>

<template>
	<form class="students-list-wrapper" v-on:submit.prevent="handleAddUser">
		<h1 class="styled-title">Add new student</h1>
		<FormField label="Name" id="name" name="name" v-bind:value="formValues.name" v-bind:handleInputChange />
		<FormField label="Attendance" id="attendance" name="attendance" v-bind:value="formValues.attendance" v-bind:handleInputChange />
		<FormField label="Average" id="average" name="average" v-bind:value="formValues.average" v-bind:handleInputChange />
		<StyledButton type="submit">Add</StyledButton>
	</form>
	<div class="students-list-wrapper">
		<h1 class="styled-title">Students List</h1>
		<ul class="styled-list">
			<StudentsListItem v-bind:students v-bind:deleteStudent />
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.students-list-wrapper {
	margin: 25px;
	padding: 32px 64px;
	border-radius: 25px;
	width: 100%;
	max-width: 500px;
	background-color: $white;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
}

.styled-title {
	margin-bottom: 2.4rem;
	color: $dark-grey;
	font-size: $font-size-xl;
}

.styled-list {
	list-style: none;
}
</style>
