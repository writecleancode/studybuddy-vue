<script>
import StyledAverage from '@/components/atoms/StyledAverage.vue';
import StyledInfo from '@/components/atoms/StyledInfo.vue';
import DeleteButton from '@/components/atoms/DeleteButton.vue';
import { inject } from 'vue';

export default {
	props: {
		students: {
			type: Object,
		},
	},

	components: {
		StyledAverage,
		StyledInfo,
		DeleteButton,
	},

	setup() {
		const deleteStudent = inject('deleteStudent');

		return {
			deleteStudent,
		};
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

<style lang="scss" scoped>
.styled-list-item {
	display: flex;
	align-items: center;
	padding: 2.4rem 0;
	border-bottom: 1px solid #dfe2e8;

	&:last-child {
		border-bottom: none;
	}
}
</style>
