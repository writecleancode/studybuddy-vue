<template>
	<button class="delete-button" aria-label="delete student from the list">
		<img src="@/assets/icons/delete-icon.svg" alt="" />
	</button>
</template>

<style scoped>
.delete-button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	border: none;
	border-radius: 100px;
	width: 24px;
	height: 24px;
	/* background-color: ${({ theme }) => theme.colors.grey}; */
	background-color: #c0c7d6;

	img {
		width: 60%;
		height: 60%;
	}
}
</style>
