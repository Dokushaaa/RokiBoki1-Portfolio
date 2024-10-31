import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";

import PageNotFound from "./components/partials/PageNotFound";
import Home from "./components/pages/developer/FrontEnd/Home";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<StoreProvider>
					<Router>
						<Routes>
							<Route
								path='*'
								element={<Home />}
							/>

							<Route
								path='/*'
								element={<PageNotFound />}
							/>
						</Routes>
					</Router>
				</StoreProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
