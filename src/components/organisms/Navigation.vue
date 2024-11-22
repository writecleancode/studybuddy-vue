<template>
	<nav class="navigation-wrapper">
		<div class="app-name-wrapper">
			<p class="app-name">Study Buddy</p>
		</div>
		<RouterLink to="/" class="styled-link">Dashboard</RouterLink>
		<RouterLink to="/add-student" class="styled-link">Add student</RouterLink>
	</nav>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.navigation-wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-top: 3.2rem;
	padding-bottom: 3.2rem;
	border-right: 1px solid $grey;
}

.app-name-wrapper {
	display: flex;
	align-items: center;
	margin-bottom: 4.8rem;
	width: 100%;
	background-color: $dark-grey;
}

.app-name {
	margin-right: 2.4rem;
	margin-left: auto;
	padding-top: 1rem;
	padding-bottom: 1rem;
	width: min-content;
	color: $white;
	font-size: $font-size-l;
	font-weight: bold;
	text-align: right;
}

.styled-link {
	position: relative;
	margin: 0.6rem 2rem;
	padding: 0.6rem 1.2rem;
	color: $dark-grey;
	font-weight: bold;
	text-decoration: none;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		right: -20px;
		translate: 0 -50%;
		width: 24px;
		height: 4px;
		background-color: $grey;
		opacity: 0;
		transition: opacity 0.4s ease-in-out;
	}

	&.router-link-active::after {
		opacity: 1;
	}
}
</style>
