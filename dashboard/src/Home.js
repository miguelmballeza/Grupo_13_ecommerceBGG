// import logo from './logo.svg';
import './App.css';
import './css/App.css';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ContentRowTop from './components/ContentRowTop';
import ContentWrapper from './components/ContentWrapper';
import ListOf from './components/listOf';

function Home(props) {
  return (
    <div id="all">
      <div className="App">
        <SideBar id="SideBar" />
        <div id="content">
          <TopBar id="TopBar"/>
          <ContentRowTop />
          { props.home &&
          <ContentWrapper />
          }
          { !props.home &&
          <ListOf list={props.list} />
          }
          <Footer id="Footer"/>
        </div>
      </div>
    </div>
  );
}

export default Home;