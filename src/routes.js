import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DashBoard from './pages/Dashboard';
import Login from './pages/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return(
    <Route {...rest} render={ props => (
      !token ? (
        <Component { ...props } />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
      )
    )} />
  )
}

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />

        <PrivateRoute path="/" exact component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}