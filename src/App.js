import logo from "./logo.svg";
import "./App.css";
import SideCard from "./components/SideCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Listpage from "./components/Listpage";
// import SimilarJobsCards from "./components/SimilarJobsCards";
import SimilarJobsCardsView from "./components/SimilarJobsView";
import ListPageAboutDescription from "./components/ListPageAboutDescription";
import ListPageRightSecondCard from "./components/ListPageRightSecondCard";



function App() {
  return (
    <>
      <Login />
      <NavBar />
      <SideCard />
      <Footer />
      <Listpage/>
      <SimilarJobsCardsView/>
      <ListPageAboutDescription/>
      
       
    </>
  );
}

export default App;
