<script>
export default {
	props: {
		students: {
			type: Object,
		},
	},
};
</script>

<template>
	<li v-for="student in students">
		<div>{{ student.average }}</div>
		<div>
			<p>{{ student.name }}</p>
			<p>attendance: {{ student.attendance }}</p>
		</div>
		<button>X</button>
	</li>
</template>
