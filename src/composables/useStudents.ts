import { createProvider } from '@/utils/createProvider';
import { students as studentsData } from '@/data/students';
import { ref } from 'vue';

export function useStudents() {
	const students = ref(studentsData);

	const handleAddStudent = formValues => {
		const newStudent = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		students.value.unshift(newStudent);
	};

	const deleteStudent = name => {
		const filteredStudnets = students.value.filter(student => student.name !== name);
		students.value = filteredStudnets;
	};

	return {
		students,
		handleAddStudent,
		deleteStudent,
	};
}

const [useStudentsProvider, useStudentsContext] = createProvider('Students', useStudents);

export { useStudentsProvider };
export default useStudentsContext;
