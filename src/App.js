
import "./App.css";
import SideCard from "./components/SideCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <>
      <Login />
      <NavBar />
      <SideCard />
      <Footer />
      <Wrapper/>
    </>
  );
}

export default App;
