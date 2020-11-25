// Components
import Navigationbar from "./components/Navigationbar";
import Projectslist from "./components/Projectslist";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

//Component Styling
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navigationbar />
      <Projectslist />
      <Loading />
      <Footer />
    </>
  );
}

export default App;
