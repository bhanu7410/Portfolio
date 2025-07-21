// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Technologies from "./components/Technologies";

function App() {
	return (
		<div className="h-screen w-screen bg-[rgba(17,17,17,1)] font-(family-name:--font-monaco) text-white selection:bg-orange-400 selection:text-white lg:px-20">
			<Header />

			<Technologies />
		</div>
	);
}

export default App;
