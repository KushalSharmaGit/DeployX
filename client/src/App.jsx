import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <Router>
        <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/domain/:id" element={<DomainPage />} />
          <Route path="/view/:id" element={<PortfolioOne />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        
      </Router>
  )
}

export default App
