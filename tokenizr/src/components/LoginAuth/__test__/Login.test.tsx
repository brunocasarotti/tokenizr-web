import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

test('Pagina renderizada', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>);
    const textElement = screen.getByText(/email/i)
    expect(textElement).toBeInTheDocument()
})


test('Form renderizado', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("checkbox")
    expect(formElement).toBeTruthy()
})

test('Botôes renderizados', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("button")
    expect(formElement).toBeTruthy()
})

