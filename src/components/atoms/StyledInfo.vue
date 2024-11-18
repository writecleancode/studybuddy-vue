<script>
export default {
	props: {
		name: {
			type: String,
		},
		attendance: {
			type: String,
		},
	},
};
</script>

<template>
	<div class="styled-info-wrapper">
		<p class="styled-info-name">{{ name }}</p>
		<p class="styled-info-attendance">attendance: {{ attendance }}</p>
	</div>
</template>

<style scoped>
.styled-info-wrapper {
	margin-left: 24px;
}

.styled-info-name {
	/* color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l}; */
	color: #737c8e;
	font-size: 1.7rem;
	font-weight: bold;
}

.styled-info-attendance {
	/* color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.s}; */
	color: #737c8e;
	font-size: 1.1rem;
}
</style>
