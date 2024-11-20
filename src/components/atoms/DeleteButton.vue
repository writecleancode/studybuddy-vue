<template>
	<button class="delete-button" aria-label="delete student from the list">
		<img src="@/assets/icons/delete-icon.svg" alt="" />
	</button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.delete-button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	border: none;
	border-radius: 100px;
	width: 24px;
	height: 24px;
	background-color: $grey;

	img {
		width: 60%;
		height: 60%;
	}
}
</style>
