import React, { Suspense, lazy } from 'react';

import { Route, Switch } from 'react-router-dom';
import Question from '../components/question/Question';

const Login = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('../components/login/Login')), 2000);
	});
});

const Routes = () => {
	return (
		<Switch>
			<Suspense fallback={<span className='loader'></span>}>
				<Route path='/' exact component={Login} />
				<Route path='/q' component={Question} />
			</Suspense>
		</Switch>
	);
};

export default Routes;
