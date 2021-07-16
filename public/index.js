import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso';
import Home from './pages/home/index.js';
import NotFound from './pages/_404.js';
import Sunnyside from './pages/sunnyside';

const About = lazy(() => import('./pages/about/index.js'));

export function App() {
	return (
		<LocationProvider>
			<div class="app">
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/sunnyside" component={Sunnyside} />
						<Route default component={NotFound} />
					</Router>
				</ErrorBoundary>
			</div>
		</LocationProvider>
	);
}

hydrate(<App />);

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
