import './app.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Routes from './config/Routes';

function App() {
	return (
		<BrowserRouter>
			<Route
				render={() => (
					<div className='app'>
						<Routes />
					</div>
				)}
			/>
		</BrowserRouter>
	);
}

export default App;
