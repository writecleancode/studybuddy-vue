<script>
import DeleteIcon from '@/assets/icons/DeleteIcon.vue';

export default {
	components: {
		DeleteIcon,
	},
};
</script>

<template>
	<button class="delete-button" aria-label="delete student from the list">
		<DeleteIcon />
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
}
</style>
