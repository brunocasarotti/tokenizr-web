import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Juridico from '../signUp/signUpJuridica/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

test('Pagina renderizada', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Juridico} />
        </Switch>
    </BrowserRouter>);
    const textElement = screen.getByText(/CADASTRO/i)
    expect(textElement).toBeInTheDocument()
})

test('Formulário renderizado', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Juridico} />
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("textbox")
    expect(formElement).toBeTruthy()
});

test('Checar se é juridico', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Juridico} />
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByText("CNPJ")
    expect(formElement).toBeTruthy()
});

test('Botôes renderizados', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Juridico} />
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("button")
    expect(formElement).toBeTruthy()
})