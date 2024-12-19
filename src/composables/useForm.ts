import { ref } from 'vue';

export const useForm = (initialFormState: Record<string, string>) => {
	const formValues = ref({ ...initialFormState });

	const handleInputChange = (e: Event) => (formValues.value[(e.target as HTMLInputElement).name] = (e.target as HTMLInputElement).value);

	const handleClearForm = (initialFormState: Record<string, string>) => {
		formValues.value = { ...initialFormState };
	};

	return {
		formValues,
		handleInputChange,
		handleClearForm,
	};
};
