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

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-info-wrapper {
	margin-left: 24px;
}

.styled-info-name {
	color: $dark-grey;
	font-size: $font-size-l;
	font-weight: bold;
}

.styled-info-attendance {
	color: $dark-grey;
	font-size: $font-size-s;
}
</style>
