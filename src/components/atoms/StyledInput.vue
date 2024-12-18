<script lang="ts">
export default {
	props: {
		name: {
			type: String,
		},
		id: {
			type: String,
		},
		type: {
			type: String,
		},
		value: {
			type: String,
		},
	},
};
</script>

<template>
	<input :name :id :type :value class="styled-input" />
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-input {
	margin-bottom: 1.6rem;
	padding: 0.5rem 0.8rem;
	font-size: $font-size-m;
	border: 1px solid #c0c7d6;
	border-radius: 100px;
	box-shadow: -2px 4px 10px #737c8e17;

	&:focus {
		outline: none;
		box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
	}
}
</style>
