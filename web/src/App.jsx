import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './spacex_logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';

const client = new ApolloClient({
	uri: '/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="container">
					<img
						src={logo}
						alt="SpaceX"
						style={{ width: '100%', maxWidth: 300, display: 'block', margin: 'auto' }}
					/>

					<Route exact path="/">
						<Launches />
					</Route>
					<Route exact path="/launch/:flight_number">
						<Launch />
					</Route>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
