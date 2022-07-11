// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact={true}>
        <Home home={true} />
      </Route>
      <Route path="/listOfUsers" exact={true}>
        <Home home={false} path="listOfUsers" list="users"/>
      </Route>
      <Route path="/listOfProducts" exact={true}>
        <Home home={false} path="listOfProducts" list="products" />
      </Route>
      <Route component={Home} />
    </Switch>
    </>
  );
}

export default App;
