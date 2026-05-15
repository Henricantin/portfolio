import Menu from "./components/Menu";
import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/hero";

function App() {
	return (
		<MainLayout>
			<Menu />

			<Hero />
		</MainLayout>
	);
}

export default App;
