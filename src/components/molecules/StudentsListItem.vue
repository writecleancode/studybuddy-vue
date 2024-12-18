<script lang="ts">
import StyledAverage from '@/components/atoms/StyledAverage.vue';
import StyledInfo from '@/components/atoms/StyledInfo.vue';
import DeleteButton from '@/components/atoms/DeleteButton.vue';

import { useStudentsContext } from '@/providers/useStudents';

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
		const { deleteStudent } = useStudentsContext();
		const { average, name, attendance } = student;

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
		<StyledAverage :average />
		<StyledInfo :name :attendance />
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
