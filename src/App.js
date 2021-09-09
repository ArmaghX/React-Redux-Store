import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={ProductListing} />
				<Route path="/product/:productId" exact component={ProductDetails} />
				<Route>404 Not Found!</Route>
			</Switch>
		</div>
	);
}

export default App;
