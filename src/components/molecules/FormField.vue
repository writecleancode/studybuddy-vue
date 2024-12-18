<script lang="ts">
import StyledLabel from '@/components/atoms/StyledLabel.vue';
import StyledInput from '@/components/atoms/StyledInput.vue';

import type { PropType } from 'vue';

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
		value: {
			type: String,
		},
		handleInputChange: {
			type: Function as PropType<(e: Event) => void>,
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
		<StyledLabel :for="id">{{ label }}</StyledLabel>
		<StyledInput :name :id :type :value v-on:input="handleInputChange" :data-testid="label" />
	</div>
</template>

<style lang="scss" scoped>
.form-field-wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
</style>
