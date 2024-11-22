<template>
	<p class="styled-title">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-title {
	margin-bottom: 2.4rem;
	color: $dark-grey;
	font-size: $font-size-xl;
	font-weight: bold;
}
</style>
