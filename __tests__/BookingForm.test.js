import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../src/components/BookingForm/BookingForm';

describe('BookingForm', () => {
    test('renders BookingForm component', () => {
        render(<BookingForm />);
        const formElement = screen.getByTestId('booking-form');
        expect(formElement).toBeInTheDocument();
    });

    test('submits form with valid data', () => {
        const handleSubmit = jest.fn();
        render(<BookingForm onSubmit={handleSubmit} />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-10-10' } });
        fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '19:00' } });

        fireEvent.click(screen.getByText(/submit/i));

        expect(handleSubmit).toHaveBeenCalledWith({
            name: 'John Doe',
            email: 'john@example.com',
            date: '2023-10-10',
            time: '19:00',
        });
    });

    test('shows error message with invalid data', () => {
        render(<BookingForm />);

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: '' } });
        fireEvent.click(screen.getByText(/submit/i));

        const errorMessage = screen.getByText(/email required/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('disables submit button when form is incomplete', () => {
        render(<BookingForm />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: '' } });

        const submitButton = screen.getByText(/submit/i);
        expect(submitButton).toBeDisabled();
    });
});