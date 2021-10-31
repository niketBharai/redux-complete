import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Counter from "./components/Counter";

const App = () => {
	return (
		<div className='App'>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Counter />
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;
