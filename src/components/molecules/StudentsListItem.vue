<script>
import { inject } from 'vue';
import StyledAverage from '@/components/atoms/StyledAverage.vue';
import StyledInfo from '@/components/atoms/StyledInfo.vue';
import DeleteButton from '@/components/atoms/DeleteButton.vue';

export default {
	components: {
		StyledAverage,
		StyledInfo,
		DeleteButton,
	},

	props: {
		student: {
			type: Object,
		},
	},

	setup({ student }) {
		const { average, name, attendance } = student;
		const deleteStudent = inject('deleteStudent');

		return {
			average,
			name,
			attendance,
			deleteStudent,
		};
	},
};
</script>

<template>
	<li class="styled-list-item">
		<StyledAverage v-bind:average="average" />
		<StyledInfo v-bind:name="name" v-bind:attendance="attendance" />
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
