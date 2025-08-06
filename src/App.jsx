import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="max-w-screen overflow-hidden">
            <NavBar />
            <Hero />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
