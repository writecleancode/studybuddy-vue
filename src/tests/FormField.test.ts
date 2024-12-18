import { render } from '@testing-library/vue';
import FormField from '@/components/molecules/FormField.vue';

describe('Form Field', () => {
	it('renders the component', () => {
		render(FormField, {
			props: {
				label: 'name',
				name: 'name',
				id: 'name',
			},
		});
	});
});
