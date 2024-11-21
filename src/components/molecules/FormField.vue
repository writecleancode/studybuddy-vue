<script>
import StyledLabel from '@/components/atoms/StyledLabel.vue';
import StyledInput from '@/components/atoms/StyledInput.vue';

export default {
	props: {
		label: {
			type: String,
		},
		name: {
			type: String,
		},
		id: {
			type: String,
		},
		type: {
			type: String,
			default: 'text',
		},
	},

	components: {
		StyledLabel,
		StyledInput,
	},
};
</script>

<template>
	<div class="form-field-wrapper">
		<StyledLabel v-bind:for="id">{{ label }}</StyledLabel>
		<StyledInput v-bind:name v-bind:id v-bind:type />
	</div>
</template>

<style lang="scss" scoped>
.form-field-wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
</style>
