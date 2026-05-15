import Menu from "./components/Menu";
import MainLayout from "./layouts/MainLayout";
import About from "./sections/about";
import Experience from "./sections/experience";

import Hero from "./sections/hero";

function App() {
	return (
		<MainLayout>
			<Menu />

			<Hero />
			<About />
			<Experience />
		</MainLayout>
	);
}

export default App;
