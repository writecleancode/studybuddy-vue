<script>
import StyledAverage from '@/components/atoms/StyledAverage.vue';
import StyledInfo from '@/components/atoms/StyledInfo.vue';
import DeleteButton from '@/components/atoms/DeleteButton.vue';

export default {
	props: {
		students: {
			type: Object,
		},
		deleteStudent: {
			type: Function,
		},
	},

	components: {
		StyledAverage,
		StyledInfo,
		DeleteButton,
	},
};
</script>

<template>
	<li v-for="{ average, name, attendance } in students" class="styled-list-item">
		<StyledAverage v-bind:average />
		<StyledInfo v-bind:name v-bind:attendance />
		<DeleteButton v-on:click="deleteStudent(name)" />
	</li>
</template>

<style scoped>
.styled-list-item {
	display: flex;
	align-items: center;
	padding: 24px 0;
	border-bottom: 1px solid #dfe2e8;

	&:last-child {
		border-bottom: none;
	}
}
</style>
