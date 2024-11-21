<template>
	<button class="styled-button">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.styled-button {
	margin: 0.8rem 0;
	padding: 0.8rem 1.6rem;
	border: none;
	border-radius: 100px;
	background-color: $light-purple;
	color: $dark-grey;
	font-size: $font-size-s;
	font-weight: bold;
}
</style>
