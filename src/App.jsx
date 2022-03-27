
import './App.css';
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Experience from './component/Experience/Experience';



function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
