<script lang="ts">
export default {
	props: {
		is: {
			type: String,
			default: 'div',
		},
	},
};
</script>

<template>
	<component :is class="view-wrapper">
		<slot />
	</component>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.view-wrapper {
	margin: 2.4rem;
	padding: 3.2rem 6.4rem;
	border-radius: 25px;
	width: 100%;
	max-width: 500px;
	background-color: $white;
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
}
</style>
