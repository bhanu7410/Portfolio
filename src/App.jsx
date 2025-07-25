// import Navbar from "./components/Navbar";
import Bio from "./components/BioSection/Bio";
import Header from "./components/Header";
import Projects from "./components/ProjectsSection/Projects";
import Technologies from "./components/Technologies";

function App() {
	return (
		<div className="bg-[rgba(17,17,17,1)] px-10 py-5 font-(family-name:--font-monaco) text-white selection:bg-orange-400 selection:text-white lg:px-30">
			<Header />
			<Technologies />
			<Bio />
			<Projects />
		</div>
	);
}

export default App;
