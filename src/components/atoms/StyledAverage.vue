<script lang="ts">
import { computed } from 'vue';

export default {
	props: {
		average: {
			type: String,
		},
	},

	setup(props) {
		const bgColor = computed(() => {
			const averageNumber = Number(props.average);
			if (averageNumber >= 4) return 'bg-success';
			if (averageNumber >= 3) return 'bg-warning';
			if (averageNumber >= 2) return 'bg-error';
			return '';
		});

		return {
			bgColor,
		};
	},
};
</script>

<template>
	<div class="styled-average-wrapper" :class="bgColor">{{ average }}</div>
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
