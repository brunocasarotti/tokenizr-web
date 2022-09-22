import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import './input.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import SignUp from './views/auth/signUp'
import SignUpFisica from './views/auth/signUp/signUpFisica'
import SignUpJuridica from './views/auth/signUp/signUpJuridica'


ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<HashRouter>
				<Switch>
					<Route path={`/auth`} component={AuthLayout} />
					<Route path={`/sign-up`} component={SignUp} />
					<Route path={`/sign-up-fisica`} component={SignUpFisica} />
					<Route path={`/sign-up-juridica`} component={SignUpJuridica} />
					<Route path={`/admin`} component={AdminLayout} />
					<Route path={`/rtl`} component={RTLLayout} />
					<Redirect from='/' to='/admin' />
				</Switch>
			</HashRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);