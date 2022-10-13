import { render, screen } from '@testing-library/react';
import App from './App';

const mockIntersectionObserver = class {
    constructor() { }
    observe() { }
    unobserve() { }
    disconnect() { }
};

beforeEach(() => {
    window.IntersectionObserver = mockIntersectionObserver;
});

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
