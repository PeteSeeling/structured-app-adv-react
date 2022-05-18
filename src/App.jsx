import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
    <Router>
    <Header />
    </Router>
    </UserProvider>
  )
}
