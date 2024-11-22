<script>
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
	<ViewWrapper is="form" v-on:submit.prevent="handleAddStudent">
		<StyledTitle class="styled-title">Add new student</StyledTitle>
		<FormField label="Name" id="name" name="name" v-bind:value="formValues.name" v-bind:handleInputChange />
		<FormField label="Attendance" id="attendance" name="attendance" v-bind:value="formValues.attendance" v-bind:handleInputChange />
		<FormField label="Average" id="average" name="average" v-bind:value="formValues.average" v-bind:handleInputChange />
		<StyledButton type="submit">Add</StyledButton>
	</ViewWrapper>
</template>
