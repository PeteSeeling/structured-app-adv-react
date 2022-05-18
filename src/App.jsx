import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './views/Auth/Auth';

export default function App() {
  return (
    <UserProvider>
    <Router>
    <Header />
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>

    </Router>
    </UserProvider>
  )
}
