// import logo from './logo.svg';
import './App.css';
import Homepage from './components/home/home';
import NavBar from './components/navBar/navbar';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
