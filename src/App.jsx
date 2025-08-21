// import Navbar from "./components/Navbar";
import Bio from "./components/BioSection/Bio";
import Contact from "./components/ContactSection/Contact";
import Header from "./components/Header";
import Projects from "./components/ProjectsSection/Projects";
import Technologies from "./components/Technologies/Technologies";

function App() {
	return (
		<div className="bg-[rgba(17,17,17,1)] px-10 py-5 font-(family-name:--font-monaco) text-white selection:bg-orange-400 selection:text-white sm:px-20 md:px-20 lg:px-40 xl:px-60">
			<Header />
			<Technologies />
			<Bio />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
