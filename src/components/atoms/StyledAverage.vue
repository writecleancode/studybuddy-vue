<script>
export default {
	props: {
		average: {
			type: String,
		},
	},

	data() {
        const bgColor = ''
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
        }};
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.m}; */
	background-color: #c0c7d6;
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;

	&.success {
		background-color: #8fcb81;
	}

	&.warning {
		background-color: #e1d888;
	}

	&.error {
		background-color: #cb8581;
	}
}
</style>
