<script lang="ts">
import ViewWrapper from '@/components/molecules/ViewWrapper.vue';
import StyledTitle from '@/components/atoms/StyledTitle.vue';
import FormField from '@/components/molecules/FormField.vue';
import StyledButton from '@/components//atoms/StyledButton.vue';

import { useStudentsContext } from '@/providers/useStudents';
import { useForm } from '@/composables/useForm';

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

		const { handleAddStudent } = useStudentsContext();
		const { formValues, handleInputChange, handleClearForm } = useForm(initialFormState);

		const handleSubmitForm = () => {
			handleAddStudent(formValues.value);
			handleClearForm(initialFormState);
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
		<FormField label="Name" id="name" name="name" :value="formValues.name" :handleInputChange />
		<FormField label="Attendance" id="attendance" name="attendance" :value="formValues.attendance" :handleInputChange />
		<FormField label="Average" id="average" name="average" :value="formValues.average" :handleInputChange />
		<StyledButton type="submit">Add</StyledButton>
	</ViewWrapper>
</template>
