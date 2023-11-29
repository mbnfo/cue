import './App.css';
import {AuthProvider} from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {
HashRouter as Router,
Route,
Switch
} from 'react-router-dom'
import Signin from './pages/Signin';
import Flashcards from './pages/Flashcards';
import CreateFlash from './pages/CreateFlash'
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <AuthProvider>
        <PrivateRoute path = '/' component = {HomePage} exact/>
        <Route path = '/login' component = {LoginPage}/>
        <Route path = '/signin' component = {Signin}/>
        <Route path = '/flashpack/:id' component = {Flashcards}/>
        <Route path = '/createpack' component = {CreateFlash}/>
      </AuthProvider>
      </Switch>
    </Router>
    </div>
  );
}
//fix the rerouting issue that you face after login happens or find an alternative to redirect

export default App;
