<script>
export default {
	props: {
		average: {
			type: String,
		},
	},

	setup({ average }) {
		const bgColor = () => {
			if (average >= 4) return 'bg-success';
			if (average >= 3) return 'bg-warning';
			if (average >= 2) return 'bg-error';
			return '';
		};

		return {
			bgColor,
		};
	},
};
</script>

<template>
	<div class="styled-average-wrapper" v-bind:class="bgColor()">{{ average }}</div>
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

	&.bg-success {
		background-color: $success;
	}

	&.bg-warning {
		background-color: $warning;
	}

	&.bg-error {
		background-color: $error;
	}
}
</style>
