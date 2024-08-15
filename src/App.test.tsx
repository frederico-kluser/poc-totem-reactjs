import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	it('renders the Vite and React logos', () => {
		render(<App />);

		// Verifica se as imagens dos logos estão presentes
		const viteLogo = screen.getByAltText('Vite logo');
		const reactLogo = screen.getByAltText('React logo');

		expect(viteLogo).toBeInTheDocument();
		expect(reactLogo).toBeInTheDocument();
	});

	it('renders the initial count and increments when the button is clicked', () => {
		render(<App />);

		// Verifica se o texto inicial do botão é "count is 0"
		const button = screen.getByText(/count is 0/i);
		expect(button).toBeInTheDocument();

		// Simula um clique no botão
		fireEvent.click(button);

		// Verifica se o texto do botão é atualizado para "count is 1"
		expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
	});

	it('renders the correct heading and paragraph', () => {
		render(<App />);

		// Verifica se o heading e o parágrafo estão presentes
		expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
		expect(screen.getByText(/Edit src\/App.tsx and save to test HMR/i)).toBeInTheDocument();
		expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
	});
});
