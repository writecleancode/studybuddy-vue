<script>
import { inject, ref } from 'vue';
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';
import FormField from '@/components/molecules/FormField.vue';
import StyledButton from '@/components//atoms/StyledButton.vue';

export default {
	components: {
		ViewWrapper,
		StyledTitle,
		FormField,
		StyledButton,
	},

	setup() {
		const initialFormState = {
			name: '',
			attendance: '',
			average: '',
		};

		const formValues = ref({ ...initialFormState });
		const handleAddStudent = inject('handleAddStudent');

		const handleInputChange = e => (formValues.value[e.target.name] = e.target.value);

		const handleSubmitForm = () => {
			handleAddStudent(formValues.value);
			formValues.value = { ...initialFormState };
		};

		return {
			formValues,
			handleInputChange,
			handleSubmitForm,
		};
	},
};
</script>

<template>
	<ViewWrapper is="form" v-on:submit.prevent="handleSubmitForm">
		<StyledTitle class="styled-title">Add new student</StyledTitle>
		<FormField label="Name" id="name" name="name" v-bind:value="formValues.name" v-bind:handleInputChange />
		<FormField label="Attendance" id="attendance" name="attendance" v-bind:value="formValues.attendance" v-bind:handleInputChange />
		<FormField label="Average" id="average" name="average" v-bind:value="formValues.average" v-bind:handleInputChange />
		<StyledButton type="submit">Add</StyledButton>
	</ViewWrapper>
</template>
