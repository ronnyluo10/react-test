import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UserList  from './components/users/List.js';
import UserForm from './components/users/Form.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/form/users" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
