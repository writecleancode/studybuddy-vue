<script>
import StudentsListItem from '@/components/StudentsListItem.vue';

export default {
	components: {
		StudentsListItem,
	},

	props: {
		students: {
			type: Object,
		},
	},
};
</script>

<template>
	<div>
		<ul>
			<StudentsListItem v-bind:students />>
		</ul>
	</div>
</template>
