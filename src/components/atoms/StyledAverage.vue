<script>
export default {
	props: {
		average: {
			type: String,
		},
	},

	data() {
		const bgColor = '';
		// const bgColor = () => {
		// 	if (average >= 4) return 'success';
		// 	if (average >= 3) return 'warning';
		// 	if (average >= 2) return 'error';
		// 	return '';
		// };

		return {
			bgColor,
		};
	},
};
</script>

<template>
	<div v-bind:class="`styled-average-wrapper ${bgColor}`">{{ average }}</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-average-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 100px;
	/* background-color: ${({ theme, $average }) => {
		if ($average >= 4) return theme.colors.success;
		if ($average >= 3) return theme.colors.warning;
		if ($average >= 2) return theme.colors.error;
		return theme.colors.grey;
        }}; */
	background-color: $grey;
	color: $white;
	font-size: $font-size-m;
	font-weight: bold;

	&.success {
		background-color: $success;
	}

	&.warning {
		background-color: $warning;
	}

	&.error {
		background-color: $error;
	}
}
</style>
