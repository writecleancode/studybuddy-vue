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
	<div class="wrapper">
		<p class="styled-name">{{ name }}</p>
		<p class="styled-attendance">attendance: {{ attendance }}</p>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.wrapper {
	margin-left: 24px;
}

.styled-name {
	color: $dark-grey;
	font-size: $font-size-l;
	font-weight: bold;
}

.styled-attendance {
	color: $dark-grey;
	font-size: $font-size-s;
}
</style>
