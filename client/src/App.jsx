import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import HostProject from './Pages/HostProject';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import ComingSoon from './Pages/ComingSoon';

function App() {

  return (
    <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/host" element={<HostProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:projectId" element={<Dashboard />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </Router>
  )
}

export default App
