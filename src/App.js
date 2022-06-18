import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Subjects from './components/subjects/Subjects';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Assessment from './components/asssement/Assessment';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='subjects' element={<Subjects />} />
        <Route path='assessment' element={<Assessment />} />
      </Routes>
    </div>
  );
}

export default App;
