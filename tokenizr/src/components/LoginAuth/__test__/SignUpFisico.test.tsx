import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fisico from '../SignUpFisica';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

test('Pagina renderizada', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Fisico />} />
        </Routes>
    </BrowserRouter>);
    const textElement = screen.getByText(/CADASTRO/i)
    expect(textElement).toBeInTheDocument()
})

test('Formulário renderizado', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Fisico />} />
        </Routes>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("textbox")
    expect(formElement).toBeTruthy()
})

test('Checar se é fisico', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Fisico />} />
        </Routes>
    </BrowserRouter>);
    const formElement = screen.getAllByText("CPF")
    expect(formElement).toBeTruthy()
});

test('Botôes renderizados', async () => {
    render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Fisico />} />
        </Routes>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("button")
    expect(formElement).toBeTruthy()
})