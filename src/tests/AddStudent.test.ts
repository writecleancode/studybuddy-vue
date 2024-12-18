import { renderWithProviders } from '@/helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/vue';
import AddStudent from '@/views/AddStudent.vue';
import Dashboard from '@/views/Dashboard.vue';

describe('Add Student', () => {
	it('render the component with custom provider', async () => {
		renderWithProviders({
			components: { AddStudent, Dashboard },
			template: `
            <div>
                <AddStudent />
                <Dashboard />
            </div>
            `,
		});

		await fireEvent.update(screen.getByTestId('Name'), 'Sylwia Śliwińska');
		await fireEvent.update(screen.getByTestId('Attendance'), '96%');
		await fireEvent.update(screen.getByTestId('Average'), '4.6');

		await fireEvent.click(screen.getByText('Add'));

		screen.getByText('Sylwia Śliwińska');
	});
});
