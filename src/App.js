import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import ListUser from './components/ListUser';
import CreateUser from './components/createUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
     <h4>
     CRUD REACT using API of PHP
     </h4>
     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <Link to="/" >List of Users</Link>
        </li>
        <li>
          <Link to="/user/create" >Create a User</Link>
        </li>
      </ul>
     </nav>
     <Routes>
      <Route index element={<ListUser/>}/>
      <Route exact path='/user/create' element={< CreateUser />}></Route>
      <Route exact path='/user/:id/edit' element={< EditUser />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
