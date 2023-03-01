import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import AddUser from './Pages/AddUser';
import UserLists from './Pages/UserLists';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<AddUser/>}/>
        <Route path='/users' element={<UserLists/>}/>
      </Routes>
    </Router>
      
    
  );
}

export default App;
