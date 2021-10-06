// import logo from './logo.svg';
import './App.css';
import './css/App.css';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ContentRowTop from './components/ContentRowTop';
import ContentWrapper from './components/ContentWrapper';


function App() {
  return (
    <div className="App">
      <SideBar id="SideBar" />
      <div id="content">
        <TopBar id="TopBar"/>
        <ContentRowTop />
        <ContentWrapper />
        <Footer id="Footer"/>
      </div>
    </div>
  );
}

export default App;
