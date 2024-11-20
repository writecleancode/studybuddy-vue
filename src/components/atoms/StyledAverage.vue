<script>
export default {
	props: {
		average: {
			type: String,
		},
	},

	setup({ average }) {
		const bgColor = () => {
			if (average >= 4) return 'success-bg';
			if (average >= 3) return 'warning-bg';
			if (average >= 2) return 'error-bg';
			return '';
		};

		return {
			bgColor,
		};
	},
};
</script>

<template>
	<div v-bind:class="`styled-average-wrapper ${bgColor()}`">{{ average }}</div>
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
	background-color: $grey;
	color: $white;
	font-size: $font-size-m;
	font-weight: bold;

	&.success-bg {
		background-color: $success;
	}

	&.warning-bg {
		background-color: $warning;
	}

	&.error-bg {
		background-color: $error;
	}
}
</style>
