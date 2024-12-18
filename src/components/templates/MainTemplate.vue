<script lang="ts">
import Navigation from '@/components/organisms/Navigation.vue';

export default {
	components: {
		Navigation,
	},
};
</script>

<template>
	<div class="main-template-wrapper">
		<Navigation />
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.main-template-wrapper {
	display: grid;
	grid-template-columns: 180px 1fr;
	min-height: 100vh;
	background-color: $light-grey;
}
</style>
