import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fisico from '../SignUpFisica';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

test('Pagina renderizada', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Fisico}/>
        </Switch>
    </BrowserRouter>);
    const textElement = screen.getByText(/CADASTRO/i)
    expect(textElement).toBeInTheDocument()
})

test('Formulário renderizado', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Fisico}/>
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("textbox")
    expect(formElement).toBeTruthy()
})

test('Checar se é fisico', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Fisico}/>
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByText("CPF")
    expect(formElement).toBeTruthy()
});

test('Botôes renderizados', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route path="/" component={Fisico}/>
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("button")
    expect(formElement).toBeTruthy()
})