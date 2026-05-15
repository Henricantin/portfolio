import Menu from "./components/Menu";
import MainLayout from "./layouts/MainLayout";
import About from "./sections/about";

import Hero from "./sections/hero";

function App() {
	return (
		<MainLayout>
			<Menu />

			<Hero />
			<About />
		</MainLayout>
	);
}

export default App;
