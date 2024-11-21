<script>
export default {
	props: {
		for: {
			type: String,
		},
	},
};
</script>

<template>
	<label v-bind:for class="styled-label"><slot /></label>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-label {
	margin-bottom: 0.8rem;
	color: $dark-grey;
	font-size: $font-size-m;
	font-weight: bold;
}
</style>
