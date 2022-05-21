import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './views/Auth/Auth';
import ListView from './views/List/List';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <UserProvider>
    <Router>
    <Header />

    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/listview'>
        <ListView />
      </PrivateRoute>
    </Switch>

    </Router>
    </UserProvider>
  )
}
