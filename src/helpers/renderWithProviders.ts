import { render } from '@testing-library/vue';
import { h, type Component } from 'vue';
import { useStudentsProvider } from '@/providers/useStudents';

export const renderWithProviders = (component: Component, options = {}) => {
	return render(
		{
			setup() {
				useStudentsProvider();
				return () => h(component);
			},
		},
		options
	);
};
