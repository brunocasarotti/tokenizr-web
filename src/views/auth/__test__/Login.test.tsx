import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../signIn/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

test('Form renderizado', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route component={Login} />
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("checkbox")
    expect(formElement).toBeTruthy()
})

test('Botôes renderizados', async () => {
    render(<BrowserRouter>
        <Switch>
            <Route component={Login} />
        </Switch>
    </BrowserRouter>);
    const formElement = screen.getAllByRole("button")
    expect(formElement).toBeTruthy()
})