<script>
import FormField from '@/components/molecules/FormField.vue';
import StyledButton from '@/components//atoms/StyledButton.vue';

export default {
	components: {
		FormField,
		StyledButton,
	},

	props: {
		handleAddStudent: {
			type: Function,
		},
		formValues: {
			type: Object,
		},
		handleInputChange: {
			type: Function,
		},
	},
};
</script>

<template>
	<form class="students-list-wrapper" v-on:submit.prevent="handleAddStudent">
		<h1 class="styled-title">Add new student</h1>
		<FormField label="Name" id="name" name="name" v-bind:value="formValues.name" v-bind:handleInputChange />
		<FormField label="Attendance" id="attendance" name="attendance" v-bind:value="formValues.attendance" v-bind:handleInputChange />
		<FormField label="Average" id="average" name="average" v-bind:value="formValues.average" v-bind:handleInputChange />
		<StyledButton type="submit">Add</StyledButton>
	</form>
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
</style>
