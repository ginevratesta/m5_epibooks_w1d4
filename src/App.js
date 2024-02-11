import NavBar from "./components/MyNav/Navbar";
import MyAlert from "./components/Alert/MyAlert";
import GetBooksData from "./components/AllTheBooks/GetBooksData";
import Footer from "./components/MyFooter/Footer";

const App = () => {
  return(
    <main>
      <NavBar site = {"ROMANTIC TRIP"} link1 = {"Home"} link2 = {"About"} link3 = {"Browse"}/>
      <MyAlert />
      <GetBooksData />
      <Footer phone = {"333 333 3333"} email = {"romantic@trip.com"}/>
    </main>
  )
};

export default App;